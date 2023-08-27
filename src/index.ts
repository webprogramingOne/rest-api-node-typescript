import express, { Application, Request, Response, NextFunction } from 'express'
const app: Application = express()
const port: number = 4000

app.use('/health', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ data: 'test', id: '1', status: '200' })
})

app.listen(port, () => console.log(`server listening on port ${port}`))
