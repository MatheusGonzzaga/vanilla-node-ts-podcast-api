# Podcast Manager

### Dominio
Padcasts feitos em video

### Descrição
Um app ao estilo netflix, aonde possa centralizar diferentes episódios de podcasts separados por categoria

### Features
- Listar os episódios podcasts em sessões de categorias
    - [Saúde, Fitness, Mentalidade, Humor]
- Filtrar espisódios por nome de canal de podcasts

## Como?
- Estratégia de Zoom Out

### Features
 - Listar os episódios podcasts em sessões de categorias
    
 - COMO VOU IMPLEMENTAR?
    -[GET] Vou retornar em uma api rest (json) o nome do podcast, nome do episódio, imagem de capa, link

```js
[
    {
        podcastName: "flow",
        episode: "CBUM - Flow #319",
        videoId: "5DaLlqP-8uI"
        cover: "https://i.ytimg.com/vi/5DaLlqP-8uI/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=5DaLlqP-8uI",
        categories: ["Saúde", "Fitness", "Esporte"]
    },
        {
        podcastName: "flow",
        episode: "MIGUEL NICOLELIS - Flow #445",
        videoId: "fkVlpbDmpEU"
        cover: "https://i.ytimg.com/vi/fkVlpbDmpEU/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=fkVlpbDmpEU",
        categories: ["Ciência"]
    }
]
```

