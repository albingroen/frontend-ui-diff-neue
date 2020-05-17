import { request } from '.'

export const getInvitation = async (invitationId: string) => {
  const res = await request.get(`/invitations/${invitationId}`)
  return res.data.invitation
}
