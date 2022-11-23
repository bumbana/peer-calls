export const createObjectURL = (object: unknown) =>
  window.URL.createObjectURL(object)
export const revokeObjectURL = (url: string) => window.URL.revokeObjectURL(url)

export const valueOf = (id: string) => {
  const el = window.document.getElementById(id) as HTMLInputElement
  return el ? el.value : null
}

export interface ClientConfig {
  baseUrl: string
  nickname: string
  callId: string
  peerId: string
  peerConfig: PeerConfig
  network: 'mesh' | 'sfu'
}

export interface PeerConfig {
  iceServers: RTCIceServer[]
  encodedInsertableStreams: boolean
}

export const config: ClientConfig  = JSON.parse(valueOf('config')!)

export const MediaStream = window.MediaStream
export const MediaStreamTrack = window.MediaStreamTrack
export const RTCRtpReceiver = window.RTCRtpReceiver

export const AudioContext = window.AudioContext
export const AudioWorkletNode = window.AudioWorkletNode

export const localStorage = window.localStorage
