import { IncomingMessage, ServerResponse } from 'http';
import { listEpisodesService } from '../services/list_episodes_service';
import { filterEpisodesService } from '../services/filter_episodes_service';
import { ContentType } from '../utils/content_type';

const DEFAULT_CONTENT = { 'content-type': ContentType.JSON };

export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    const response = await listEpisodesService();

    res.writeHead(response.statusCode, DEFAULT_CONTENT);
    res.write(JSON.stringify(response.body));

    res.end();
}

export const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    const response = await filterEpisodesService(req.url);

    res.writeHead(response.statusCode, DEFAULT_CONTENT);
    res.write(JSON.stringify(response.body));

    res.end();
}