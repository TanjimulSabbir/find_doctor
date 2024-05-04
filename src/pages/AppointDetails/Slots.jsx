export default function Slots({ slots, clockSpan, setChooseData }) {
    return (
        slots.map((slot, index) => (
            <div key={index} className='flex gap-5 items-center flex-wrap' onClick={() => setChooseData(prev => ({ ...prev, slot: `${slot} ${clockSpan}` }))}>
                <p className='py-3 px-5 border border-green-600 rounded-lg cursor-pointer'>{slot.toString()} {clockSpan}</p>
            </div>
        ))
    );
}
