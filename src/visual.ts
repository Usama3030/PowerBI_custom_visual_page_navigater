/*
 *  Power BI Visual CLI
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
"use strict";

import powerbi from "powerbi-visuals-api";
import { FormattingSettingsService } from "powerbi-visuals-utils-formattingmodel";
import "./../style/visual.less";
import * as reactDom from "react-dom";
import App from "./Components/App";

import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
import IVisualHost = powerbi.extensibility.visual.IVisualHost;

import { VisualFormattingSettingsModel } from "./settings";
import { createElement } from "react";
import { update } from "./Components/Hooks/useApp";

export class Visual implements IVisual {
  private target: HTMLElement;
  private updateCount: number;
  private textNode: Text;
  private host: IVisualHost;
  private formattingSettings: VisualFormattingSettingsModel;
  private formattingSettingsService: FormattingSettingsService;

  constructor(options: VisualConstructorOptions) {
    this.host = options.host;
    reactDom.render(createElement(App), options.element);
    console.log("Constructor calls!");
  }

  public update(options: VisualUpdateOptions) {
    // this.formattingSettings =
    //   this.formattingSettingsService.populateFormattingSettingsModel(
    //     VisualFormattingSettingsModel,
    //     options.dataViews[0]
    //   );

    console.log("options", options);
    console.log("host", this.host);

    // update([]);
    update({ data: options.dataViews, host: this.host });

    // console.log("Visual update", options);
    // if (this.textNode) {
    //   this.textNode.textContent = (this.updateCount++).toString();
    // }
  }

  //for fetching more data then 30000
  // public update(options: VisualUpdateOptions) {
  //   // Check if there's more data to fetch
  //   if (options.dataViews && options.dataViews[0].metadata.segment) {
  //     this.fetchMoreData();
  //   }

  //   // Call your render visual method with the available data
  //   this.renderVisual(options.dataViews[0]);
  // }

  // private fetchMoreData() {
  //   // Logic to request more data from Power BI
  //   this.host.fetchMoreData();
  // }

  // private renderVisual(dataView: DataView) {
  //   // Efficient rendering logic for large datasets
  //   // ...
  // }

  /**
   * Returns properties pane formatting model content hierarchies, properties and latest formatting values, Then populate properties pane.
   * This method is called once every time we open properties pane or when the user edit any format property.
   */
  public getFormattingModel(): powerbi.visuals.FormattingModel {
    return this.formattingSettingsService.buildFormattingModel(
      this.formattingSettings
    );
  }
}
