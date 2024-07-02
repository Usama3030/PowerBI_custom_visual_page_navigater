import { formattingSettings } from "powerbi-visuals-utils-formattingmodel";
import FormattingSettingsCard = formattingSettings.SimpleCard;
import FormattingSettingsSlice = formattingSettings.Slice;
export declare class PagesSettings extends FormattingSettingsCard {
    backgroundColor: formattingSettings.ColorPicker;
    titleEditor: formattingSettings.TextInput;
    titleColor: formattingSettings.ColorPicker;
    fontColor: formattingSettings.ColorPicker;
    fontSize: formattingSettings.NumUpDown;
    filterSize: formattingSettings.ItemDropdown;
    name: string;
    displayName: string;
    slices: Array<FormattingSettingsSlice>;
}
