export default function Slots({ slots, chooseData, setChooseData }) {
    return (
        slots.map((slot, index) => (
            <div key={index} className='rightSlider flex gap-3 items-center flex-wrap' onClick={() => setChooseData(prev => ({ ...prev, slot: `${slot}` }))}>
                <p className={`py-2 px-3 border border-green-600 rounded-lg cursor-pointer ${slot === chooseData.slot && "bg-green-600 text-white"}`}>{slot.toString()}</p>
            </div>
        ))
    );
}
