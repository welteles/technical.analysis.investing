/*
 * Copyright (C) 2020 Wellington Rocha
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 *
 * Proprietary and confidential.
 */
import * as axios from "axios";
import * as http from "http";
import * as https from "https";
import * as qs from "querystring";
import * as dom from "xmldom";
import * as xpath from "xpath";
import {
    TechnicalAnalysisInvestingIndicators,
    TechnicalAnalysisInvestingMarket,
    TechnicalAnalysisInvestingPeriod,
    TechnicalAnalysisInvestingResponse,
} from "./Model";

/**
 * Technical Analysis Investing.
 */
export class TechnicalAnalysisInvesting {
    /**
     * Client.
     */
    private readonly client: axios.AxiosInstance;

    /**
     * Endpoint.
     */
    private readonly endpoint: string = "https://www.investing.com";

    /**
     * Constructor.
     */
    public constructor() {
        this.client = axios.default.create({
            httpAgent: new http.Agent({ keepAlive: true }),
            httpsAgent: new https.Agent({ keepAlive: true }),
        });
    }

    /**
     * Get analysis.
     *
     * @param market
     * @param period
     * @param indicator
     */
    public getAnalysis(
        market: TechnicalAnalysisInvestingMarket,
        period: TechnicalAnalysisInvestingPeriod,
        indicator: TechnicalAnalysisInvestingIndicators = TechnicalAnalysisInvestingIndicators.SUMMARY
    ): Promise<TechnicalAnalysisInvestingResponse> {
        return this.httpRequest("/instruments/Service/GetTechincalData", {
            pairID: market,
            period
        })
            .then((data) => {
                const doc = new dom.DOMParser().parseFromString(data);
                const nodes = xpath.select(indicator, doc);
                if (nodes[0] === undefined) {
                    return Promise.reject("Invalid element.");
                }
                const response = nodes[0].toString() as TechnicalAnalysisInvestingResponse;
                if (!this.isValidResponse(response)) {
                    return Promise.reject("Invalid response.");
                }
                return response;
            })
            .catch((e) => Promise.reject(e));
    }
    /**
     * Valid response.
     *
     * @param response
     */
    private isValidResponse(response: string): boolean {
        return Object.values(TechnicalAnalysisInvestingResponse).includes(
            response as TechnicalAnalysisInvestingResponse
        );
    }

    /**
     * Http request.
     *
     * @param path
     * @param data
     */
    private httpRequest(path: string, data: any): Promise<any> {
        const body = qs.stringify(data);
        const options: any = {};
        options.baseURL = this.endpoint;
        options.url = path;
        options.method = "POST";
        options.data = body;
        options.headers = {
            "X-Requested-With": "XMLHttpRequest",
            "User-Agent":
                "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36",
            "Content-Type": "application/x-www-form-urlencoded",
        };
        return this.client
            .request(options)
            .then((response) => Promise.resolve(response.data))
            .catch((e) => Promise.reject(e));
    }
}
