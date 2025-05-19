import { PodcastsTransferResponse } from "../models/podcats_transfer_response";
import { podcastsRepository } from "../repositories/podcast_repository"
import { StatusCode } from "../utils/status_code";


export const filterEpisodesService = async (
    podcastName: string | undefined
): Promise<PodcastsTransferResponse> => {

    let response: PodcastsTransferResponse = {
        statusCode: 0,
        body: [],
    }

    const queryString = podcastName?.split('?channel=')[1] ?? '';
    const podcasts = await podcastsRepository(queryString);
    const isNotEmpty = podcasts.length !== 0;

    response.statusCode = isNotEmpty ? StatusCode.OK : StatusCode.NO_CONTENT
    response.body = podcasts;

    return response;
}