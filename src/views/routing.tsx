import { LANDING_PATH } from '@/shared/utils/path';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom'

const LandingView = lazy (async () => await import('./landing'))

const generalRouting = (): JSX.Element => {
	return (
		<>
			<Routes>
                <Route path={LANDING_PATH} element={<LandingView />} />
			</Routes>
		</>
	)
}

export default generalRouting
