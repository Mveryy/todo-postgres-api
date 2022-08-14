import { Request, Response } from 'express'
import { prismaClient } from '../database/prismaClient'

export const CreateTaskController = async (req: Request, res: Response) => {
    const {description, done} = req.body

    if (!description) return res.status(400).send("Field 'description' is required")
    if (done === undefined) return res.status(400).send("Field 'done' is required")
    if (typeof done !== 'boolean') return res.status(400).send("Field 'done' must contain a Boolean value")

    try {
      const task = await prismaClient.tasks.create({
        data: {
          description,
          done
        }
      })
      return res.status(201).send(task)
    } catch (error) {
      return res.status(500).send(`Internal server error`)
    }
  }