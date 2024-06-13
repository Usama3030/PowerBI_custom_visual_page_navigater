import powerbi from "powerbi-visuals-api";
import IVisualHost = powerbi.extensibility.visual.IVisualHost;
export type hostType = {
    host: IVisualHost;
};
export type appState = {
    data: powerbi.DataView[];
    host?: IVisualHost;
};
export type appRequired = {
    id?: string;
    title?: string;
    summary?: string;
    getAccess?: string;
    url?: string;
};
export type paginationType = {
    currentPage?: number;
    totalPage?: number;
    paginate: (pageNumber: number) => void;
};
