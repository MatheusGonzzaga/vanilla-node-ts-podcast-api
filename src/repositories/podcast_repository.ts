import fs from 'fs';
import path from 'path';

const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const podcastsRepository = async (podcastName?: string): Promise<PodcastModel[]> => {
    const language = 'utf-8';

    const data = fs.readFileSync(pathData, language);
    let jsonFile = JSON.parse(data);

    if (podcastName) {
        jsonFile = jsonFile.filter(
            (podcast: PodcastModel) => podcast.podcastName === podcastName
        );
    }

    return jsonFile;
}