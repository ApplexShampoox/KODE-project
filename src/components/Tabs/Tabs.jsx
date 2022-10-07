
// import { NavLink } from "react-router-dom";
import style from "./Tabs.module.css";

const Tabs = () => (
  <div className={style.tabs}>
    <div className={style.sorting_tabs}>
      <a href="/" className={style.sorting_tabs__el + " " + style.active}>Все</a>
      <a href="/designers" className={style.sorting_tabs__el}>Designers</a>
      <a href="/analysts" className={style.sorting_tabs__el}>Analysts</a>
      <a href="/managers" className={style.sorting_tabs__el}>Managers</a>
      <a href="/ios" className={style.sorting_tabs__el}>iOS</a>
      <a href="/android" className={style.sorting_tabs__el}>Android</a>
      <a href="/backend" className={style.sorting_tabs__el}>Backend</a>
      <a href="/frontend" className={style.sorting_tabs__el}>Frontend</a>
      <a href="/backoffice" className={style.sorting_tabs__el}>Back office</a>
      <a href="/pr" className={style.sorting_tabs__el}>PR</a>
      <a href="/hr" className={style.sorting_tabs__el}>HR</a>
      <a href="/qa" className={style.sorting_tabs__el}>QA</a>
      <a href="/support" className={style.sorting_tabs__el}>Support</a>
    </div>
  </div>
);

export default Tabs;

