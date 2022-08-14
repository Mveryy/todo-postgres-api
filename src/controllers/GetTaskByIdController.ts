import { Request, Response } from 'express'
import { prismaClient } from '../database/prismaClient'

export const GetTaskByIdController = async (req: Request, res: Response) => {
  const task_id = req.params.id
    try {
      const tasks = await prismaClient.tasks.findFirst({
        where: {
          id: +task_id
        }
      })
      return tasks 
      ? res.status(200).send(tasks) 
      : res.status(404).send("Not found ID")
    } catch (error) {
      return res.status(400).send(error)
    }
  }