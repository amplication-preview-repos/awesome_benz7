/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Match as PrismaMatch,
  UserProfile as PrismaUserProfile,
} from "@prisma/client";

export class MatchServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.MatchCountArgs, "select">): Promise<number> {
    return this.prisma.match.count(args);
  }

  async matches<T extends Prisma.MatchFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MatchFindManyArgs>
  ): Promise<PrismaMatch[]> {
    return this.prisma.match.findMany<Prisma.MatchFindManyArgs>(args);
  }
  async match<T extends Prisma.MatchFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.MatchFindUniqueArgs>
  ): Promise<PrismaMatch | null> {
    return this.prisma.match.findUnique(args);
  }
  async createMatch<T extends Prisma.MatchCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MatchCreateArgs>
  ): Promise<PrismaMatch> {
    return this.prisma.match.create<T>(args);
  }
  async updateMatch<T extends Prisma.MatchUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MatchUpdateArgs>
  ): Promise<PrismaMatch> {
    return this.prisma.match.update<T>(args);
  }
  async deleteMatch<T extends Prisma.MatchDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.MatchDeleteArgs>
  ): Promise<PrismaMatch> {
    return this.prisma.match.delete(args);
  }

  async getUserProfile(parentId: string): Promise<PrismaUserProfile | null> {
    return this.prisma.match
      .findUnique({
        where: { id: parentId },
      })
      .userProfile();
  }
}
