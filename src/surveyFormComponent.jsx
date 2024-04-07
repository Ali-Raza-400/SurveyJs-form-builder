import React from "react";
import { SurveyCreator, SurveyCreatorComponent } from "survey-creator-react";
import "survey-core/survey.i18n.js";
import "survey-creator-core/survey-creator-core.i18n.js";
import $ from "jquery";
import "jquery-bar-rating/jquery.barrating.js";
import Inputmask from "inputmask";
import noUiSlider from "nouislider";
import "nouislider/distribute/nouislider.css";
import "easy-autocomplete/dist/easy-autocomplete.css"
import "jquery-bar-rating/dist/themes/fontawesome-stars.css";
import "jquery-bar-rating/dist/themes/css-stars.css";
import "jquery-ui-dist/jquery-ui.css";
import * as SurveyCore from "survey-core";
import * as widgets from "surveyjs-widgets";
import "survey-core/defaultV2.css";
import "survey-creator-core/survey-creator-core.css";
import "./index.css";

window["$"] = window["jQuery"] = $;
require("jquery-ui-dist/jquery-ui.js");
//ckeditor
const self = window;
if (!self.alreadyRendered) {
    const script = document.createElement("script");
    script.src = "https://cdn.ckeditor.com/4.14.1/standard/ckeditor.js";
    document.head.append(script);
    script.onload = function () {
        const CKEDITOR = window.CKEDITOR;
        self.alreadyRendered = true;
        if (self.forceUpdate) self.forceUpdate(); // need only for REACT
    };
}
// EO ckeditor

widgets.inputmask(SurveyCore);
widgets.jquerybarrating(SurveyCore, $);
widgets.jqueryuidatepicker(SurveyCore, $);
widgets.nouislider(SurveyCore);
widgets.ckeditor(SurveyCore);
widgets.autocomplete(SurveyCore, $);
widgets.microphone(SurveyCore);
function SurveyCreatorRenderComponent() {
    const options = {
        questionTypes: ["text", "checkbox", "radiogroup", "dropdown"]
        
        
    };
    const creator = new SurveyCreator(options);
    return (<SurveyCreatorComponent creator={creator} />);
}

export default SurveyCreatorRenderComponent;