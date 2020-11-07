/* Declares the PaloSandroSynth Audio Worklet Processor */

class PaloSandroSynth_AWP extends AudioWorkletGlobalScope.WAMProcessor
{
  constructor(options) {
    options = options || {}
    options.mod = AudioWorkletGlobalScope.WAM.PaloSandroSynth;
    super(options);
  }
}

registerProcessor("PaloSandroSynth", PaloSandroSynth_AWP);
