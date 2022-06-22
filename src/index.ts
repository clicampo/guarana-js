import { Client as SegmentClient } from './segment'
import { Events } from './types'

/**
 * Track user events and actions
 */
class EventTracker {
    private segmentClient: SegmentClient

    constructor (segmentWriteKey: string) {
        this.segmentClient = new SegmentClient(segmentWriteKey)
    }

    /**
     * Record user event
     * @param event Event that will be recorded
     * @param properties Metadata about the event
     */
    trackEvent (event: Events, properties?: object) {
        switch (event) {
        case Events.IDENTIFY:
            this.segmentClient.identify()
            break

        case Events.PAGEVIEW:
            this.segmentClient.page()
            break

        case Events.WHATSAPP_BUTTON_CLICKED:
            this.segmentClient.track(event, properties)
            break

        default:
            throw new Error(`This event doesn't have a handler function`)
        }
    }
}

console.log('success')

export { EventTracker }
