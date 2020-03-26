"use strict";
/*
 * Copyright (C) 2020 Wellington Rocha
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 *
 * Proprietary and confidential.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Markets.
 */
var TechnicalAnalysisInvestingIndicators;
(function (TechnicalAnalysisInvestingIndicators) {
    TechnicalAnalysisInvestingIndicators["SUMMARY"] = "//*[contains(@class,'summary')]//span/text()";
    TechnicalAnalysisInvestingIndicators["SUMMARY_MOVING_AVERAGES"] = "";
    TechnicalAnalysisInvestingIndicators["SUMMARY_TECHNICAL_INDICATORS"] = "";
    TechnicalAnalysisInvestingIndicators["INDICATOR_RSI_14"] = "RSI(14)";
    TechnicalAnalysisInvestingIndicators["INDICATOR_STOCH_9_6"] = "STOCH(9,6)";
    TechnicalAnalysisInvestingIndicators["INDICATOR_STOCHRSI_14"] = "STOCHRSI(14)";
    TechnicalAnalysisInvestingIndicators["INDICATOR_MACD_12_26"] = "MACD(12,26)";
    TechnicalAnalysisInvestingIndicators["INDICATOR_ADX_14"] = "ADX(14)";
    TechnicalAnalysisInvestingIndicators["INDICATOR_WILLIAMS_R"] = "Williams %R";
    TechnicalAnalysisInvestingIndicators["INDICATOR_CCI_14"] = "CCI(14)";
    TechnicalAnalysisInvestingIndicators["INDICATOR_ATR_14"] = "ATR(14)";
    TechnicalAnalysisInvestingIndicators["INDICATOR_HIGHS_LOWS_14"] = "Highs/Lows(14)";
    TechnicalAnalysisInvestingIndicators["INDICATOR_ULTIMATE_OSCILLATOR"] = "Ultimate Oscillator";
    TechnicalAnalysisInvestingIndicators["INDICATOR_ROC"] = "ROC";
    TechnicalAnalysisInvestingIndicators["INDICATOR_BULL_BEAR_POWER_13"] = "Bull/Bear Power(13)";
    TechnicalAnalysisInvestingIndicators["INDICATOR_MA5"] = "MA5";
    TechnicalAnalysisInvestingIndicators["INDICATOR_MA10"] = "MA10";
    TechnicalAnalysisInvestingIndicators["INDICATOR_MA20"] = "MA20";
    TechnicalAnalysisInvestingIndicators["INDICATOR_MA50"] = "MA50";
    TechnicalAnalysisInvestingIndicators["INDICATOR_MA100"] = "MA100";
    TechnicalAnalysisInvestingIndicators["INDICATOR_MA200"] = "MA200";
})(TechnicalAnalysisInvestingIndicators = exports.TechnicalAnalysisInvestingIndicators || (exports.TechnicalAnalysisInvestingIndicators = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVjaG5pY2FsQW5hbHlzaXNJbnZlc3RpbmdJbmRpY2F0b3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9UZWNobmljYWxBbmFseXNpc0ludmVzdGluZy9Nb2RlbC9UZWNobmljYWxBbmFseXNpc0ludmVzdGluZ0luZGljYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7O0dBT0c7O0FBRUg7O0dBRUc7QUFDSCxJQUFZLG9DQXNCWDtBQXRCRCxXQUFZLG9DQUFvQztJQUM1QyxnR0FBd0QsQ0FBQTtJQUN4RCxvRUFBNEIsQ0FBQTtJQUM1Qix5RUFBaUMsQ0FBQTtJQUNqQyxvRUFBNEIsQ0FBQTtJQUM1QiwwRUFBa0MsQ0FBQTtJQUNsQyw4RUFBc0MsQ0FBQTtJQUN0Qyw0RUFBb0MsQ0FBQTtJQUNwQyxvRUFBNEIsQ0FBQTtJQUM1Qiw0RUFBb0MsQ0FBQTtJQUNwQyxvRUFBNEIsQ0FBQTtJQUM1QixvRUFBNEIsQ0FBQTtJQUM1QixrRkFBMEMsQ0FBQTtJQUMxQyw2RkFBcUQsQ0FBQTtJQUNyRCw2REFBcUIsQ0FBQTtJQUNyQiw0RkFBb0QsQ0FBQTtJQUNwRCw2REFBcUIsQ0FBQTtJQUNyQiwrREFBdUIsQ0FBQTtJQUN2QiwrREFBdUIsQ0FBQTtJQUN2QiwrREFBdUIsQ0FBQTtJQUN2QixpRUFBeUIsQ0FBQTtJQUN6QixpRUFBeUIsQ0FBQTtBQUM3QixDQUFDLEVBdEJXLG9DQUFvQyxHQUFwQyw0Q0FBb0MsS0FBcEMsNENBQW9DLFFBc0IvQyJ9