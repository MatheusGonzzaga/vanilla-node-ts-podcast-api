import { PodcastsTransferResponse } from "../models/podcats_transfer_response";
import { podcastsRepository } from "../repositories/podcast_repository";
import { StatusCode } from "../utils/status_code";

export const listEpisodesService = async (): Promise<PodcastsTransferResponse> => {
    let response: PodcastsTransferResponse = {
        statusCode: 0,
        body: [],
    }

    const podcasts = await podcastsRepository();
    const isNotEmpty = podcasts.length !== 0;

    response.statusCode = isNotEmpty ? StatusCode.OK : StatusCode.NO_CONTENT
    response.body = podcasts;

    return response;
}
