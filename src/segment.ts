import segment from '@segment/analytics-next'

class Client {
    private analytics: segment.AnalyticsBrowser

    constructor (writeKey: string) {
        this.analytics = segment.AnalyticsBrowser.load({ writeKey })
    }

    identifyUser (data?: object) {
        this.analytics.identify(data)
    }

    pageview () {
        this.analytics.page()
    }

    track (eventName: string, properties?: object) {
        this.analytics.track(eventName, properties)
    }
}

export { Client }
