import { AnalyticsBrowser } from '@segment/analytics-next'

class Client {
    private analytics: AnalyticsBrowser

    constructor (writeKey: string) {
        this.analytics = AnalyticsBrowser.load({ writeKey })
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
