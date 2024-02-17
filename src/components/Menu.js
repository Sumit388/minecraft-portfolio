import { useStore } from "../hooks/useStore"

export const Menu = () => {
	const [saveWorld, resetWorld] = useStore((state) => [state.saveWorld, state.resetWorld])

	return (<div className="menu absolute">
		<button
			onClick={(e) => saveWorld(e)}
		>Save</button>
		<button
			onClick={(e) => resetWorld(e)}
		>Reset</button>
	</div>)
}