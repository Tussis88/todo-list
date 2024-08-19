import "./style.css";
import { domLogic } from "./assets/dom";
import { projectArray } from "./assets/projects";

projectArray.loadArray();
domLogic.updateMenu();
