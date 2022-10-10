import { NavLink } from "react-router-dom";
import style from "./Tabs.module.css";

const Tabs = () => (
  <div className={style.tabs}>
    <div className={style.sorting_tabs}>
      <NavLink to="/" className={style.sorting_tabs__el} end>Все</NavLink>
      <NavLink to="designers" className={style.sorting_tabs__el}>Designers</NavLink>
      <NavLink to="analysts" className={style.sorting_tabs__el}>Analysts</NavLink>
      <NavLink to="managers" className={style.sorting_tabs__el}>Managers</NavLink>
      <NavLink to="ios" className={style.sorting_tabs__el}>iOS</NavLink>
      <NavLink to="android" className={style.sorting_tabs__el}>Android</NavLink>
      <NavLink to="backend" className={style.sorting_tabs__el}>Backend</NavLink>
      <NavLink to="frontend" className={style.sorting_tabs__el}>Frontend</NavLink>
      <NavLink to="backoffice" className={style.sorting_tabs__el}>Back office</NavLink>
      <NavLink to="pr" className={style.sorting_tabs__el}>PR</NavLink>
      <NavLink to="hr" className={style.sorting_tabs__el}>HR</NavLink>
      <NavLink to="qa" className={style.sorting_tabs__el}>QA</NavLink>
      <NavLink to="support" className={style.sorting_tabs__el}>Support</NavLink>
    </div>
  </div>
);

export default Tabs;

