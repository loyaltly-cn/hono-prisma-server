import type {Hono} from "hono";

export default (app: Hono) => {
    app.post("/login", async (c) => {
        const body = await c.req.json()
        return c.json({ message: `Welcome ${body.username}` })
    })
}
