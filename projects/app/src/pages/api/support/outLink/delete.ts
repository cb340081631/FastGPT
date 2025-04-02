import { MongoOutLink } from '@fastgpt/service/support/outLink/schema';
import { authOutLinkCrud } from '@fastgpt/service/support/permission/publish/authLink';
import { OwnerPermissionVal } from '@fastgpt/global/support/permission/constant';
import type { ApiRequestProps } from '@fastgpt/service/type/next';
import { NextAPI } from '@/service/middleware/entry';
/// api
export type OutLinkDeleteQuery = {};
export type OutLinkDeleteBody = { id: string; shareId: string };
export type OutLinkDeleteResponse = {};

/* delete a shareChat by shareChatId */
async function handler(
  req: ApiRequestProps<OutLinkDeleteBody, OutLinkDeleteQuery>
): Promise<OutLinkDeleteResponse> {
  const { id, shareId } = req.body;

  await authOutLinkCrud({ req, outLinkId: id, authToken: true, per: OwnerPermissionVal });

  if (id) {
    await MongoOutLink.findByIdAndDelete(id);
  } else {
    await MongoOutLink.deleteOne({ shareId });
  }

  return {};
}

export default NextAPI(handler);
