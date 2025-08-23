ServerEvents.recipes(event => {
    event.remove({id: 'create:pressing/compat/immersiveengineering/plate_steel'})
    event.remove({id: 'immersiveengineering:metalpress/plate_steel'})
    event.remove({id: 'thermal:smelting/cured_rubber_from_smelting'})
    event.remove({id: 'thermal:smelting/cured_rubber_from_smelting'})

	event.remove({output: 'tfmg:pumpjack_crank'})
	event.remove({output: 'tfmg:pumpjack_base'})

    event.shaped('tfmg:pumpjack_crank', [
        'A A',
        'BCB',
        'DED'  
        ],{
        A: 'tfmg:synthetic_string',
        B: 'tfmg:heavy_plate',
        C: 'tfmg:steel_mechanism',
        D: 'tfmg:rebar',
        E: 'tfmg:heavy_machinery_casing'
    })
    event.shaped('tfmg:pumpjack_base', [
        'ABA',
        'CDC',
        'EFE'  
        ],{
        A: 'tfmg:synthetic_string',
        B: 'tfmg:steel_fluid_tank',
        C: 'tfmg:steel_mechanism',
        D: 'tfmg:heavy_machinery_casing',
        E: 'tfmg:steel_pipe',
        F: 'tfmg:industrial_pipe'
    })
    
})