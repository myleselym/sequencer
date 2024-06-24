"use client";
import "./Piano.css";
import WhiteKey from "./keys/WhiteKey";
import BlackKey from "./keys/BlackKey";
import { useAppSelector } from "@/lib/hooks";




const Piano = () => {
    
    const {chromaticScale, scale } = useAppSelector((state) => state.scales);

    const isScaleTone = (note: string) => scale.includes(note);

    const renderWhiteKey = (index: number) => (
        <WhiteKey
            key={index}
            note={chromaticScale.scale[index].note + chromaticScale.scale[index].octave}
            scaleTone={isScaleTone(chromaticScale.scale[index].note)}
        />
    );

    const renderBlackKey = (index: number) => (
        <BlackKey
            key={index}
            note={chromaticScale.scale[index].note + chromaticScale.scale[index].octave}
            scaleTone={isScaleTone(chromaticScale.scale[index].note)}
        />
    );

    return (
        <section id="piano">
            {chromaticScale.scale.map((_, i) => {
                if (i % 12 === 0 && i !== chromaticScale.scale.length - 1) {
                    return (
                        <div key={i} className="octave">
                            {renderWhiteKey(i)}
                            {renderBlackKey(i + 1)}
                            {renderWhiteKey(i + 2)}
                            {renderBlackKey(i + 3)}
                            {renderWhiteKey(i + 4)}
                            {renderWhiteKey(i + 5)}
                            {renderBlackKey(i + 6)}
                            {renderWhiteKey(i + 7)}
                            {renderBlackKey(i + 8)}
                            {renderWhiteKey(i + 9)}
                            {renderBlackKey(i + 10)}
                            {renderWhiteKey(i + 11)}
                        </div>
                    );
                } else if (i === chromaticScale.scale.length - 1) {
                    return (
                        <div key={i} className="octave">
                            {renderWhiteKey(i)}
                        </div>
                    );
                }
            })}
        </section>
    );
};

export default Piano;
