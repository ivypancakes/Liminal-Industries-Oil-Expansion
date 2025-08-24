ServerEvents.recipes(event => {

	event.recipes.create.sequenced_assembly([
        'immersiveengineering:component_electronic'
     ], 'immersiveengineering:slab_treated_wood_horizontal', [
        event.recipes.createDeploying('kubejs:incomplete_component_electronic', ['kubejs:incomplete_component_electronic', 'immersiveengineering:wire_copper']),
        event.recipes.createDeploying('kubejs:incomplete_component_electronic', ['kubejs:incomplete_component_electronic', 'tfmg:steel_ingot']),
        event.recipes.createDeploying('kubejs:incomplete_component_electronic', ['kubejs:incomplete_component_electronic', 'minecraft:quartz'])
     ]).transitionalItem('kubejs:incomplete_component_electronic').loops(1)



	event.recipes.create.sequenced_assembly([
        'immersiveengineering:component_electronic_adv'
     ], 'immersiveengineering:plate_duroplast', [
        event.recipes.createDeploying('kubejs:incomplete_component_electronic_adv', ['kubejs:incomplete_component_electronic_adv', 'actuallyadditions:empowered_void_crystal']),
        event.recipes.createDeploying('kubejs:incomplete_component_electronic_adv', ['kubejs:incomplete_component_electronic_adv', 'tfmg:rubber_sheet']),
        event.recipes.createDeploying('kubejs:incomplete_component_electronic_adv', ['kubejs:incomplete_component_electronic_adv', 'immersiveengineering:wire_electrum']),
        event.recipes.createDeploying('kubejs:incomplete_component_electronic_adv', ['kubejs:incomplete_component_electronic_adv', 'immersiveengineering:electron_tube'])
     ]).transitionalItem('kubejs:incomplete_component_electronic_adv').loops(1)



    event.remove({id: 'immersiveengineering:blueprint/component_electronic'})
	event.remove({id: 'immersiveengineering:crafting/light_engineering'})
	event.recipes.createSequencedAssembly([
		'immersiveengineering:light_engineering'
	   ], 'kubejs:light_engineering_empty', [
		event.recipes.createDeploying('kubejs:light_engineering_empty', ['kubejs:light_engineering_empty', 'immersiveengineering:component_electronic']),
		event.recipes.createDeploying('kubejs:light_engineering_empty', ['kubejs:light_engineering_empty', 'tfmg:heavy_plate']),
		event.recipes.createDeploying('kubejs:light_engineering_empty', ['kubejs:light_engineering_empty', 'kubejs:fluorescent_tube']),
	]).transitionalItem('kubejs:light_engineering_empty').loops(1)


	event.recipes.create.haunting('kubejs:soul_fuse', 'kubejs:empty_fuse')

	event.remove({id: 'immersiveengineering:blueprint/component_electronic_adv'})
	event.remove({id: 'immersiveengineering:crafting/heavy_engineering'})
	event.remove({output: 'tfmg:steel_mechanism'})
	event.recipes.createSequencedAssembly([
		Item.of('tfmg:steel_mechanism').withChance(130.0), // this is the item that will appear in JEI as the result
		Item.of('tfmg:heavy_sheet').withChance(8.0), // the rest of these items will be part of the scrap
		Item.of('tfmg:steel_cogwheel').withChance(8.0),
	],  'tfmg:heavy_plate', [
		event.recipes.createDeploying('tfmg:unfinished_steel_mechanism', ['tfmg:unfinished_steel_mechanism', 'tfmg:steel_cogwheel']),
		event.recipes.createDeploying('tfmg:unfinished_steel_mechanism', ['tfmg:unfinished_steel_mechanism', 'tfmg:rubber_sheet']),
		event.recipes.createDeploying('tfmg:unfinished_steel_mechanism', ['tfmg:unfinished_steel_mechanism', 'tfmg:steel_ingot']),
		event.recipes.createDeploying('tfmg:unfinished_steel_mechanism', ['tfmg:unfinished_steel_mechanism', 'kubejs:fluorescent_tube']),
		event.recipes.createDeploying('tfmg:unfinished_steel_mechanism', ['tfmg:unfinished_steel_mechanism', 'tfmg:screw']),
		event.recipes.createDeploying('tfmg:unfinished_steel_mechanism', ['tfmg:unfinished_steel_mechanism', 'tfmg:screwdriver'])
	]).transitionalItem('kubejs:heavy_engineering_empty').loops(2)

		event.recipes.createSequencedAssembly([
		'immersiveengineering:heavy_engineering'
	],  'kubejs:heavy_engineering_empty', [
		event.recipes.createDeploying('kubejs:light_engineering_empty', ['kubejs:light_engineering_empty', 'kubejs:soul_fuse']),
		event.recipes.createDeploying('kubejs:light_engineering_empty', ['kubejs:light_engineering_empty', 'tfmg:steel_mechanism']),
		event.recipes.createDeploying('kubejs:light_engineering_empty', ['kubejs:light_engineering_empty', 'create:electron_tube']),
	]).transitionalItem('tfmg:').loops(1)

	

	event.recipes.create.sequenced_assembly([
        'endrem:evil_eye'
    ],  'ae2:quantum_entangled_singularity', [
		event.recipes.createFilling('ae2:quantum_entangled_singularity', ['ae2:quantum_entangled_singularity', Fluid.of('supplementaries:lumisene', 1000)])
    ]).transitionalItem('ae2:quantum_entangled_singularity',).loops(100)



	event.recipes.create.sequenced_assembly([
        'endrem:cursed_eye'
    ],  'ae2:quantum_entangled_singularity', [
		event.recipes.createFilling('ae2:quantum_entangled_singularity', ['ae2:quantum_entangled_singularity', Fluid.of('create_central_kitchen:dragon_breath', 1000)])
    ]).transitionalItem('ae2:quantum_entangled_singularity',).loops(100)

	
	event.recipes.create.sequenced_assembly([
        'endrem:nether_eye'
    ],  'supplementaries:cannonball', [
		event.recipes.createDeploying('supplementaries:cannonball', ['supplementaries:cannonball', 'kubejs:hot_steel']),
		event.recipes.createFilling('supplementaries:cannonball', ['supplementaries:cannonball', Fluid.of('brewinandchewin:beer', 1000)]),
		event.recipes.createPressing('supplementaries:cannonball', 'supplementaries:cannonball')
    ]).transitionalItem('supplementaries:cannonball',).loops(100)

	event.recipes.create.sequenced_assembly([
        'endrem:cold_eye'
    ],  'minecraft:snowball', [
		event.recipes.createDeploying('minecraft:snowball', ['minecraft:snowball', 'thermal:blizz_rod'])
    ]).transitionalItem('minecraft:snowball',).loops(250)

	event.recipes.create.sequenced_assembly([
        'kubejs:cobblestone_bucket'
    ],  'minecraft:bucket', [
		event.recipes.createDeploying('minecraft:bucket', ['minecraft:bucket', 'minecraft:cobblestone']),
    ]).transitionalItem('minecraft:bucket',).loops(10)
	event.smelting('minecraft:lava_bucket', 'kubejs:cobblestone_bucket')

})