import {
    TechnicalAnalysisInvesting,
    TechnicalAnalysisInvestingMarket,
    TechnicalAnalysisInvestingPeriod,
} from "../src/lib/TechnicalAnalysisInvesting";

describe("TechnicalAnalysisInvesting", () => {
    test("Should return market[EUR/USD]", async (done) => {
        const client = new TechnicalAnalysisInvesting();
        await client.getAnalysis(
            TechnicalAnalysisInvestingMarket.EURUSD,
            TechnicalAnalysisInvestingPeriod.ONE_MINUTE
        );
        done();
    });
    test("Should return market[GBP/USD]", async (done) => {
        const client = new TechnicalAnalysisInvesting();
        await client.getAnalysis(
            TechnicalAnalysisInvestingMarket.GBPUSD,
            TechnicalAnalysisInvestingPeriod.ONE_MINUTE
        );
        done();
    });
    test("Should return market[AUD/USD]", async (done) => {
        const client = new TechnicalAnalysisInvesting();
        await client.getAnalysis(
            TechnicalAnalysisInvestingMarket.AUDUSD,
            TechnicalAnalysisInvestingPeriod.ONE_MINUTE
        );
        done();
    });
    test("Should return market[USD/JPY]", async (done) => {
        const client = new TechnicalAnalysisInvesting();
        await client.getAnalysis(
            TechnicalAnalysisInvestingMarket.USDJPY,
            TechnicalAnalysisInvestingPeriod.ONE_MINUTE
        );
        done();
    });
    test("Should return market[EUR/GBP]", async (done) => {
        const client = new TechnicalAnalysisInvesting();
        await client.getAnalysis(
            TechnicalAnalysisInvestingMarket.EURGBP,
            TechnicalAnalysisInvestingPeriod.ONE_MINUTE
        );
        done();
    });
    test("Should return market[USD/CAD]", async (done) => {
        const client = new TechnicalAnalysisInvesting();
        await client.getAnalysis(
            TechnicalAnalysisInvestingMarket.USDCAD,
            TechnicalAnalysisInvestingPeriod.ONE_MINUTE
        );
        done();
    });
    test("Should return market[USD/CHF]", async (done) => {
        const client = new TechnicalAnalysisInvesting();
        await client.getAnalysis(
            TechnicalAnalysisInvestingMarket.USDCHF,
            TechnicalAnalysisInvestingPeriod.ONE_MINUTE
        );
        done();
    });
    test("Should return market[NZD/USD]", async (done) => {
        const client = new TechnicalAnalysisInvesting();
        await client.getAnalysis(
            TechnicalAnalysisInvestingMarket.NZDUSD,
            TechnicalAnalysisInvestingPeriod.ONE_MINUTE
        );
        done();
    });
    test("Should return market[EUR/USD] 5 MINUTES", async (done) => {
        const client = new TechnicalAnalysisInvesting();
        await client.getAnalysis(
            TechnicalAnalysisInvestingMarket.EURUSD,
            TechnicalAnalysisInvestingPeriod.FIVE_MINUTES
        );
        done();
    });
    test("Should return market[EUR/USD] 15 MINUTES", async (done) => {
        const client = new TechnicalAnalysisInvesting();
        await client.getAnalysis(
            TechnicalAnalysisInvestingMarket.EURUSD,
            TechnicalAnalysisInvestingPeriod.FIFTEEN_MINUTES
        );
        done();
    });
    test("Should return market[EUR/USD] 30 MINUTES", async (done) => {
        const client = new TechnicalAnalysisInvesting();
        await client.getAnalysis(
            TechnicalAnalysisInvestingMarket.EURUSD,
            TechnicalAnalysisInvestingPeriod.THIRTY_MINUTES
        );
        done();
    });
    test("Should return market[EUR/USD] 1 HOUR", async (done) => {
        const client = new TechnicalAnalysisInvesting();
        await client.getAnalysis(
            TechnicalAnalysisInvestingMarket.EURUSD,
            TechnicalAnalysisInvestingPeriod.THIRTY_MINUTES
        );
        done();
    });
    test("Should return market[EUR/USD] 5 HOURS", async (done) => {
        const client = new TechnicalAnalysisInvesting();
        await client.getAnalysis(
            TechnicalAnalysisInvestingMarket.EURUSD,
            TechnicalAnalysisInvestingPeriod.FIVE_HOURS
        );
        done();
    });
    test("Should return market[EUR/USD] DAY", async (done) => {
        const client = new TechnicalAnalysisInvesting();
        await client.getAnalysis(
            TechnicalAnalysisInvestingMarket.EURUSD,
            TechnicalAnalysisInvestingPeriod.DAY
        );
        done();
    });
    test("Should return market[EUR/USD] WEEK", async (done) => {
        const client = new TechnicalAnalysisInvesting();
        await client.getAnalysis(
            TechnicalAnalysisInvestingMarket.EURUSD,
            TechnicalAnalysisInvestingPeriod.WEEK
        );
        done();
    });
    test("Should return market[EUR/USD] MONTH", async (done) => {
        const client = new TechnicalAnalysisInvesting();
        await client.getAnalysis(
            TechnicalAnalysisInvestingMarket.EURUSD,
            TechnicalAnalysisInvestingPeriod.MONTH
        );
        done();
    });
    test("Invalid HttpRequest", async (done) => {
        const client = new TechnicalAnalysisInvesting();
        return client
            .getAnalysis("AAAA" as any, TechnicalAnalysisInvestingPeriod.MONTH)
            .catch(() => done());
    });
    test("Invalid Element", async (done) => {
        const client = new TechnicalAnalysisInvesting();
        return client
            .getAnalysis(
                TechnicalAnalysisInvestingMarket.EURUSD,
                TechnicalAnalysisInvestingPeriod.MONTH,
                "ASASAS" as any
            )
            .catch(() => done());
    });
    test("Invalid response", async (done) => {
        const client = new TechnicalAnalysisInvesting();
        return client
            .getAnalysis(
                TechnicalAnalysisInvestingMarket.EURUSD,
                TechnicalAnalysisInvestingPeriod.MONTH,
                "//*[contains(@class,'summary')]" as any
            )
            .catch(() => done());
    });
});
