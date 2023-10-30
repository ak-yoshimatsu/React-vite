import { ActionFunction, Route, createBrowserRouter, createRoutesFromElements, json, redirect } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import AppNavi from "./AppNavi";
import Books from "../pages/books/Index";
import Detail from "../pages/books/Detail";
import NotFound from "../pages/errors/NotFound";
import InvalidParams from "../pages/errors/InvalidParams";
import Weathers from "../pages/weathers/Index";
import FormAction from "../pages/forms/FormAction";
import yup from "../pages/forms/yup.jp";
import { date, number, string } from "yup";

const bookAtion: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const bookSchema = yup.object({
    title: string().label('書名').required().max(100),
    price: number().label('価格').integer().positive(),
    published: date().label('刊行日').required().max(new Date(2100, 0, 1))
  })
  let info

  try {
    info = await bookSchema.validate({
      title: form.get('title'),
      price: form.get('price') || 0,
      published: new Date(form.get('published') as any),
    }, {
      abortEarly: false
    })
    console.log(info);
    return redirect('/')
  } catch (e: any) {
    return e.errors
  }
}

const routesElements = createRoutesFromElements(
  <Route path="/" element={<AppNavi />}>

    {/* NaviLink */}
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="contact" element={<Contact />} />

    {/* Books */}
    <Route path="/books">
      <Route index element={<Books />} />
      <Route
        path=":isbn"
        element={<Detail />}
        errorElement={<InvalidParams/>}
      />
      {/* action */}
      <Route path="form" element={<FormAction />} action={bookAtion} />
    </Route>

    {/* Open-Meteo 天気予報API */}
    <Route
      path="weathers/:days"
      element={<Weathers />}
      loader={async ({ params }) => {
        const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&past_days=${params.days}&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`)

        if (res.ok) {
          return res
        } else {
          return json({ "latitude":"Error" })
        }
      }}
    />

    {/* Not Found */}
    <Route path="*" element={<NotFound />} />
  </Route>
)

const routing = createBrowserRouter(routesElements)

export default routing