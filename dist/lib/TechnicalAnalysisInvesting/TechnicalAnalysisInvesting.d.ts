import { TechnicalAnalysisInvestingIndicators, TechnicalAnalysisInvestingMarket, TechnicalAnalysisInvestingPeriod, TechnicalAnalysisInvestingResponse } from "./Model";
/**
 * Technical Analysis Investing.
 */
export declare class TechnicalAnalysisInvesting {
    /**
     * Client.
     */
    private readonly client;
    /**
     * Endpoint.
     */
    private readonly endpoint;
    /**
     * Constructor.
     */
    constructor();
    /**
     * Get analysis.
     *
     * @param market
     * @param period
     * @param indicator
     */
    getAnalysis(market: TechnicalAnalysisInvestingMarket, period: TechnicalAnalysisInvestingPeriod, indicator?: TechnicalAnalysisInvestingIndicators): Promise<TechnicalAnalysisInvestingResponse>;
    /**
     * Valid response.
     *
     * @param response
     */
    private isValidResponse;
    /**
     * Http request.
     *
     * @param path
     * @param data
     */
    private httpRequest;
}
