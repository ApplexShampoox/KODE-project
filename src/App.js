import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Departments from "./components/Tabs/Departments";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Departments id={'all'} />} />
          <Route path="designers" element={<Departments id={'design'} />} />
          <Route path="analysts" element={<Departments id={'analytics'} />} />
          <Route path="managers" element={<Departments id={'management'} />} />
          <Route path="ios" element={<Departments id={'ios'} />} />
          <Route path="android" element={<Departments id={'android'} />} />
          <Route path="backend" element={<Departments id={'backend'} />} />
          <Route path="frontend" element={<Departments id={'frontend'} />} />
          <Route path="backoffice" element={<Departments id={'back_office'} />} />
          <Route path="pr" element={<Departments id={'pr'} />} />
          <Route path="hr" element={<Departments id={'hr'} />} />
          <Route path="qa" element={<Departments id={'qa'} />} />
          <Route path="support" element={<Departments id={'support'} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
