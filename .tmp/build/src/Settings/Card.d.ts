import { formattingSettings } from "powerbi-visuals-utils-formattingmodel";
import FormattingSettingsCard = formattingSettings.SimpleCard;
import FormattingSettingsSlice = formattingSettings.Slice;
export declare class CardsSettings extends FormattingSettingsCard {
    backgroundColor: formattingSettings.ColorPicker;
    titleColor: formattingSettings.ColorPicker;
    fontColor: formattingSettings.ColorPicker;
    titleSize: formattingSettings.NumUpDown;
    fontSize: formattingSettings.NumUpDown;
    dividerColor: formattingSettings.ColorPicker;
    name: string;
    displayName: string;
    slices: Array<FormattingSettingsSlice>;
}
