import { Client as SegmentClient } from './segment'

/**
 * Track and distribute events between different destinations
 */
class EventTracker {
    /**
     * Segment Analytics client instance
    */
    private segmentClient: SegmentClient

    /**
     * @param segmentWriteKey Key for sending data to Segment Analytics
     */
    constructor (segmentWriteKey: string) {
        this.segmentClient = new SegmentClient(segmentWriteKey)
    }

    /**
     * Identify user
     * @param data Metadata about the user
     */
    identifyUser (data?: object) {
        this.segmentClient.identifyUser(data)
    }

    /**
     * Record pageview
     */
    pageview () {
        this.segmentClient.pageview()
    }

    /**
     * Record user event
     * @param event Name of the event that will be recorded
     * @param data Metadata about the event
     */
    track (event: string, data?: object) {
        this.segmentClient.track(event, data)
    }
}

console.log('success!')

export { EventTracker }
