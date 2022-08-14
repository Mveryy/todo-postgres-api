import { Request, Response } from 'express'
import { prismaClient } from '../database/prismaClient'

export const DeleteTaskController = async (req: Request, res: Response) => {
  const task_id = req.params.id
  console.log(task_id)

  const taskExist = await prismaClient.tasks.findFirst({
    where: {
      id: +task_id
    }
  })

  if (!taskExist) return res.status(404).send("Task ID not found")

    try {
      const task = await prismaClient.tasks.delete({
        where: {
          id: +task_id
        }
      })
      return res.status(200).send(`Task ${task.id} was deleted.`)
    } catch (error) {
      return res.status(400).send(error)
    }
  }