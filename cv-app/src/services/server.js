import { createServer } from "miragejs";

createServer({
    routes() {

        this.get("/api/educations", () => {
            return [
                {
                    date: '2022',
                    title: 'EPAM Upskill',
                    description: 'Front-end Development',
                },
                {
                    date: '2011',
                    title: 'Moscow State Linguistic University',
                    description: 'Teaching English as a Foreign Language',
                },
            ]
        },
            { timing: 3000 }
        )

        this.get("/api/skills", () => {
            return [{
                name: 'string;',
                range: 20,
            }]
        },
            { timing: 3000 }
        )

        this.post("/api/skills",  (schema, request) => {
            let attrs = JSON.parse(request.requestBody)
            console.log(attrs)
          })

        this.passthrough();
    }
}
)

export default createServer;