/*
 * Copyright (C) 2020 Wellington Rocha
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 *
 * Proprietary and confidential.
 */

/**
 * Markets.
 */
export enum TechnicalAnalysisInvestingIndicators {
    SUMMARY = "//*[contains(@class,'summary')]//span/text()",
    SUMMARY_MOVING_AVERAGES = "",
    SUMMARY_TECHNICAL_INDICATORS = "",
    INDICATOR_RSI_14 = "RSI(14)",
    INDICATOR_STOCH_9_6 = "STOCH(9,6)",
    INDICATOR_STOCHRSI_14 = "STOCHRSI(14)",
    INDICATOR_MACD_12_26 = "MACD(12,26)",
    INDICATOR_ADX_14 = "ADX(14)",
    INDICATOR_WILLIAMS_R = "Williams %R",
    INDICATOR_CCI_14 = "CCI(14)",
    INDICATOR_ATR_14 = "ATR(14)",
    INDICATOR_HIGHS_LOWS_14 = "Highs/Lows(14)",
    INDICATOR_ULTIMATE_OSCILLATOR = "Ultimate Oscillator",
    INDICATOR_ROC = "ROC",
    INDICATOR_BULL_BEAR_POWER_13 = "Bull/Bear Power(13)",
    INDICATOR_MA5 = "MA5",
    INDICATOR_MA10 = "MA10",
    INDICATOR_MA20 = "MA20",
    INDICATOR_MA50 = "MA50",
    INDICATOR_MA100 = "MA100",
    INDICATOR_MA200 = "MA200",
}
