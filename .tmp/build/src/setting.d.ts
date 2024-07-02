import { formattingSettings } from "powerbi-visuals-utils-formattingmodel";
import FormattingSettingsModel = formattingSettings.Model;
import { ButtonsSettings } from "./Settings/Button";
import { CardsSettings } from "./Settings/Card";
import { PagesSettings } from "./Settings/Page";
export declare class VisualFormattingSettingsModel extends FormattingSettingsModel {
    buttonsSettings: ButtonsSettings;
    cardsSettings: CardsSettings;
    pagesSettings: PagesSettings;
    cards: (ButtonsSettings | CardsSettings | PagesSettings)[];
}
