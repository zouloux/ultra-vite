import { defineConfig } from 'vite'
import { resolve } from "path"

const appConfig = {
	inputs: [
		'src/index.html',
	],
	output: 'public/'
}

export default defineConfig( viteConfig => {
	return {
		// Les fichiers sources compilés doivent être dans ce dossier
		root: resolve("src/"),
		// Configurer le build
		build: {
			outDir: resolve(appConfig.output),
			assetsDir: "./",
			// Create manifest file which include all generated file paths
			manifest: true,
			rollupOptions: {
				input: appConfig.inputs.map( e => resolve(e) ),
			}
		},
		// Configurer le pipeline CSS
		css: {
			preprocessorOptions: {
				less: {
					math: 'always'
				}
			}
		},
		plugins: [
			// ...
		]
	}
})