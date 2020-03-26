"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Copyright (C) 2020 Wellington Rocha
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 *
 * Proprietary and confidential.
 */
const axios = require("axios");
const http = require("http");
const https = require("https");
const qs = require("querystring");
const dom = require("xmldom");
const xpath = require("xpath");
const Model_1 = require("./Model");
/**
 * Technical Analysis Investing.
 */
class TechnicalAnalysisInvesting {
    /**
     * Constructor.
     */
    constructor() {
        /**
         * Endpoint.
         */
        this.endpoint = "https://www.investing.com";
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
    getAnalysis(market, period, indicator = Model_1.TechnicalAnalysisInvestingIndicators.SUMMARY) {
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
            const response = nodes[0].toString();
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
    isValidResponse(response) {
        return Object.values(Model_1.TechnicalAnalysisInvestingResponse).includes(response);
    }
    /**
     * Http request.
     *
     * @param path
     * @param data
     */
    httpRequest(path, data) {
        const body = qs.stringify(data);
        const options = {};
        options.baseURL = this.endpoint;
        options.url = path;
        options.method = "POST";
        options.data = body;
        options.headers = {
            "X-Requested-With": "XMLHttpRequest",
            "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36",
            "Content-Type": "application/x-www-form-urlencoded",
        };
        return this.client
            .request(options)
            .then((response) => Promise.resolve(response.data))
            .catch((e) => Promise.reject(e));
    }
}
exports.TechnicalAnalysisInvesting = TechnicalAnalysisInvesting;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVjaG5pY2FsQW5hbHlzaXNJbnZlc3RpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL1RlY2huaWNhbEFuYWx5c2lzSW52ZXN0aW5nL1RlY2huaWNhbEFuYWx5c2lzSW52ZXN0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7Ozs7R0FPRztBQUNILCtCQUErQjtBQUMvQiw2QkFBNkI7QUFDN0IsK0JBQStCO0FBQy9CLGtDQUFrQztBQUNsQyw4QkFBOEI7QUFDOUIsK0JBQStCO0FBQy9CLG1DQUtpQjtBQUVqQjs7R0FFRztBQUNILE1BQWEsMEJBQTBCO0lBV25DOztPQUVHO0lBQ0g7UUFSQTs7V0FFRztRQUNjLGFBQVEsR0FBVywyQkFBMkIsQ0FBQztRQU01RCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQy9CLFNBQVMsRUFBRSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUM7WUFDOUMsVUFBVSxFQUFFLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQztTQUNuRCxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ksV0FBVyxDQUNkLE1BQXdDLEVBQ3hDLE1BQXdDLEVBQ3hDLFlBQWtELDRDQUFvQyxDQUFDLE9BQU87UUFFOUYsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLHVDQUF1QyxFQUFFO1lBQzdELE1BQU0sRUFBRSxNQUFNO1lBQ2QsTUFBTTtTQUNULENBQUM7YUFDRyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUNYLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0RCxNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUMzQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxTQUFTLEVBQUU7Z0JBQ3hCLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2FBQzdDO1lBQ0QsTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBd0MsQ0FBQztZQUMzRSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDakMsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUM7YUFDOUM7WUFDRCxPQUFPLFFBQVEsQ0FBQztRQUNwQixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBQ0Q7Ozs7T0FJRztJQUNLLGVBQWUsQ0FBQyxRQUFnQjtRQUNwQyxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsMENBQWtDLENBQUMsQ0FBQyxRQUFRLENBQzdELFFBQThDLENBQ2pELENBQUM7SUFDTixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSyxXQUFXLENBQUMsSUFBWSxFQUFFLElBQVM7UUFDdkMsTUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxNQUFNLE9BQU8sR0FBUSxFQUFFLENBQUM7UUFDeEIsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ2hDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO1FBQ25CLE9BQU8sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3hCLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxPQUFPLEdBQUc7WUFDZCxrQkFBa0IsRUFBRSxnQkFBZ0I7WUFDcEMsWUFBWSxFQUNSLDBHQUEwRztZQUM5RyxjQUFjLEVBQUUsbUNBQW1DO1NBQ3RELENBQUM7UUFDRixPQUFPLElBQUksQ0FBQyxNQUFNO2FBQ2IsT0FBTyxDQUFDLE9BQU8sQ0FBQzthQUNoQixJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2xELEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Q0FDSjtBQXRGRCxnRUFzRkMifQ==