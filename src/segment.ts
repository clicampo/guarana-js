import { AnalyticsBrowser } from '@segment/analytics-next'

/**
 * Client for Segment Analytics
 */
class Client {
    private analytics: AnalyticsBrowser

    constructor (writeKey: string) {
        this.analytics = AnalyticsBrowser.load({ writeKey })
    }

    /**
     * Identify user
     */
    identify () {
        this.analytics.identify()
    }

    /**
     * Record pageview
     */
    page () {
        this.analytics.page()
    }

    /**
     * Record user action
     * @param eventName Name of the action the user has performed
     * @param properties Informations about the event
     */
    track (eventName: string, properties?: object) {
        this.analytics.track(eventName, properties)
    }
}

export { Client }
