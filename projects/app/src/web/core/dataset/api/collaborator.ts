import type {
  UpdateDatasetCollaboratorBody,
  DatasetCollaboratorDeleteParams
} from '@fastgpt/global/core/dataset/collaborator';
import { GET, POST } from '@/web/common/api/request';
import type { CollaboratorItemType } from '@fastgpt/global/support/permission/collaborator';
/// api
export const getCollaboratorList = (datasetId: string) =>
  GET<CollaboratorItemType[]>('/proApi/core/dataset/collaborator/list', { datasetId });

export const postUpdateDatasetCollaborators = (body: UpdateDatasetCollaboratorBody) =>
  POST('/proApi/core/dataset/collaborator/update', body);

export const deleteDatasetCollaborators = (params: DatasetCollaboratorDeleteParams) =>
  POST('/proApi/core/dataset/collaborator/delete', params);
