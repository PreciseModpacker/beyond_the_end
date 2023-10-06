// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

JEIEvents.hideItems(event => {
	// Hide items in JEI here
	// event.hide('minecraft:cobblestone')
	
// ====================================================================================================================
// ================================================== Hide Items JEI ==================================================
// ====================================================================================================================

	// Hide original Ender Eyes
	event.hide('cataclysm:mech_eye')
	event.hide('cataclysm:flame_eye')
	event.hide('cataclysm:void_eye')
	event.hide('cataclysm:monstrous_eye')
	event.hide('cataclysm:abyss_eye'),
	event.hide('endrem:wither_eye'),
	event.hide('alexsmobs:void_worm_eye'),
	
	// Hide Altar of Summoning
	event.hide('altar_of_summoning:altarofsummoning'),
	
	// Hide Experience Obelisk Items
	event.hide('experienceobelisk:experience_obelisk'),
	event.hide('experienceobelisk:cognitium_bucket'),
	
	// Hide Target Dummy
	event.hide('dummmmmmy:target_dummy'),
	
	// Hide Skinned Lanterns
	event.hide('skinnedlanterns:pufferfish_lantern_block'),
	event.hide('skinnedlanterns:zombie_lantern_block'),
	event.hide('skinnedlanterns:creeper_lantern_block'),
	event.hide('skinnedlanterns:skeleton_lantern_block'),
	event.hide('skinnedlanterns:wither_skeleton_lantern_block'),
	event.hide('skinnedlanterns:bee_lantern_block'),
	event.hide('skinnedlanterns:jack_o_lantern_lantern_block'),
	event.hide('skinnedlanterns:paper_white_lantern_block'),
	event.hide('skinnedlanterns:ghost_lantern_block'),
	event.hide('skinnedlanterns:blinky_lantern_block'),
	event.hide('skinnedlanterns:pinky_lantern_block'),
	event.hide('skinnedlanterns:inky_lantern_block'),
	event.hide('skinnedlanterns:clyde_lantern_block'),
	event.hide('skinnedlanterns:pacman_lantern_block'),
	event.hide('skinnedlanterns:guardian_lantern_block'),
	event.hide('skinnedlanterns:paper_yellow_lantern_block'),
	event.hide('skinnedlanterns:paper_orange_lantern_block'),
	event.hide('skinnedlanterns:paper_blue_lantern_block'),
	event.hide('skinnedlanterns:paper_light_blue_lantern_block'),
	event.hide('skinnedlanterns:paper_cyan_lantern_block'),
	event.hide('skinnedlanterns:paper_lime_lantern_block'),
	event.hide('skinnedlanterns:paper_green_lantern_block'),
	event.hide('skinnedlanterns:paper_lantern_block'),
	event.hide('skinnedlanterns:paper_pink_lantern_block'),
	event.hide('skinnedlanterns:paper_brown_lantern_block'),
	event.hide('skinnedlanterns:paper_black_lantern_block'),
	event.hide('skinnedlanterns:paper_gray_lantern_block'),
	event.hide('skinnedlanterns:paper_light_gray_lantern_block'),
	event.hide('skinnedlanterns:paper_magenta_lantern_block'),
	event.hide('skinnedlanterns:paper_purple_lantern_block'),
	event.hide('skinnedlanterns:ornament_red_lantern_block'),
	event.hide('skinnedlanterns:ornament_blue_lantern_block'),
	event.hide('skinnedlanterns:ornament_purple_lantern_block'),
	event.hide('skinnedlanterns:ornament_lime_lantern_block'),
	event.hide('skinnedlanterns:ornament_magenta_lantern_block'),
	event.hide('skinnedlanterns:ornament_yellow_lantern_block'),
	event.hide('skinnedlanterns:ornament_green_lantern_block'),
	event.hide('skinnedlanterns:ornament_light_blue_lantern_block'),
	event.hide('skinnedlanterns:ornament_cyan_lantern_block'),
	event.hide('skinnedlanterns:ornament_pink_lantern_block'),
	event.hide('skinnedlanterns:ornament_orange_lantern_block'),
	event.hide('skinnedlanterns:ornament_brown_lantern_block'),
	event.hide('skinnedlanterns:ornament_black_lantern_block'),
	event.hide('skinnedlanterns:ornament_white_lantern_block'),
	event.hide('skinnedlanterns:ornament_gray_lantern_block'),
	event.hide('skinnedlanterns:ornament_light_gray_lantern_block'),
	event.hide('skinnedlanterns:ornament_green_lantern_block'),
	event.hide('skinnedlanterns:ornament_red_lantern_block'),
	event.hide('skinnedlanterns:snowman_lantern_block'),
	event.hide('skinnedlanterns:honey_lantern_block'),
	event.hide('skinnedlanterns:slime_lantern_block'),
	event.hide('skinnedlanterns:pufferfish_soul_lantern_block'),
	event.hide('skinnedlanterns:zombie_soul_lantern_block'),
	event.hide('skinnedlanterns:creeper_soul_lantern_block'),
	event.hide('skinnedlanterns:skeleton_soul_lantern_block'),
	event.hide('skinnedlanterns:wither_skeleton_soul_lantern_block'),
	event.hide('skinnedlanterns:bee_soul_lantern_block'),
	event.hide('skinnedlanterns:jack_o_lantern_soul_lantern_block'),
	event.hide('skinnedlanterns:paper_white_soul_lantern_block'),
	event.hide('skinnedlanterns:ghost_soul_lantern_block'),
	event.hide('skinnedlanterns:blinky_soul_lantern_block'),
	event.hide('skinnedlanterns:pinky_soul_lantern_block'),
	event.hide('skinnedlanterns:inky_soul_lantern_block'),
	event.hide('skinnedlanterns:clyde_soul_lantern_block'),
	event.hide('skinnedlanterns:pacman_soul_lantern_block'),
	event.hide('skinnedlanterns:guardian_soul_lantern_block'),
	event.hide('skinnedlanterns:paper_yellow_soul_lantern_block'),
	event.hide('skinnedlanterns:paper_orange_soul_lantern_block'),
	event.hide('skinnedlanterns:paper_blue_soul_lantern_block'),
	event.hide('skinnedlanterns:paper_light_blue_soul_lantern_block'),
	event.hide('skinnedlanterns:paper_cyan_soul_lantern_block'),
	event.hide('skinnedlanterns:paper_lime_soul_lantern_block'),
	event.hide('skinnedlanterns:paper_green_soul_lantern_block'),
	event.hide('skinnedlanterns:paper_soul_lantern_block'),
	event.hide('skinnedlanterns:paper_pink_soul_lantern_block'),
	event.hide('skinnedlanterns:paper_brown_soul_lantern_block'),
	event.hide('skinnedlanterns:paper_black_soul_lantern_block'),
	event.hide('skinnedlanterns:paper_gray_soul_lantern_block'),
	event.hide('skinnedlanterns:paper_light_gray_soul_lantern_block'),
	event.hide('skinnedlanterns:paper_magenta_soul_lantern_block'),
	event.hide('skinnedlanterns:paper_purple_soul_lantern_block'),
	event.hide('skinnedlanterns:ornament_red_soul_lantern_block'),
	event.hide('skinnedlanterns:ornament_blue_soul_lantern_block'),
	event.hide('skinnedlanterns:ornament_purple_soul_lantern_block'),
	event.hide('skinnedlanterns:ornament_lime_soul_lantern_block'),
	event.hide('skinnedlanterns:ornament_magenta_soul_lantern_block'),
	event.hide('skinnedlanterns:ornament_yellow_soul_lantern_block'),
	event.hide('skinnedlanterns:ornament_green_soul_lantern_block'),
	event.hide('skinnedlanterns:ornament_light_blue_soul_lantern_block'),
	event.hide('skinnedlanterns:ornament_cyan_soul_lantern_block'),
	event.hide('skinnedlanterns:ornament_pink_soul_lantern_block'),
	event.hide('skinnedlanterns:ornament_orange_soul_lantern_block'),
	event.hide('skinnedlanterns:ornament_brown_soul_lantern_block'),
	event.hide('skinnedlanterns:ornament_black_soul_lantern_block'),
	event.hide('skinnedlanterns:ornament_white_soul_lantern_block'),
	event.hide('skinnedlanterns:ornament_gray_soul_lantern_block'),
	event.hide('skinnedlanterns:ornament_light_gray_soul_lantern_block'),
	event.hide('skinnedlanterns:ornament_green_soul_lantern_block'),
	event.hide('skinnedlanterns:ornament_red_soul_lantern_block'),
	event.hide('skinnedlanterns:snowman_soul_lantern_block'),
	event.hide('skinnedlanterns:honey_soul_lantern_block'),
	event.hide('skinnedlanterns:slime_soul_lantern_block'),
	event.hide('skinnedlanterns:present_green_lantern_block'),
	event.hide('skinnedlanterns:present_green_soul_lantern_block'),
	event.hide('skinnedlanterns:present_red_lantern_block'),
	event.hide('skinnedlanterns:present_red_soul_lantern_block'),
	
	// Hide Gliders 
	event.hide('vc_gliders:paraglider_wood'),
	event.hide('vc_gliders:paraglider_iron'),
	event.hide('vc_gliders:paraglider_gold'),
	event.hide('vc_gliders:paraglider_diamond'),
	event.hide('vc_gliders:paraglider_netherite'),
	//event.hide('vc_gliders:copper_upgrade'),
	//event.hide('vc_gliders:nether_upgrade'),
	event.hide('vc_gliders:reinforced_paper'),
	event.hide('vc_gliders:reinforced_paper_iron'),
	event.hide('vc_gliders:reinforced_paper_gold'),
	event.hide('vc_gliders:reinforced_paper_diamond'),
	event.hide('vc_gliders:reinforced_paper_netherite'),
	
	// Hide Supplementaries
	event.hide('supplementaries:bamboo_spikes'),
	event.hide('supplementaries:bamboo_spikes_tipped'),
	event.hide('supplementaries:slingshot'),
	
	// Hide Simple Hats
	event.hide('simplehats:haticon'),
	event.hide('simplehats:hatdisplay'),
	event.hide('simplehats:special'),
	event.hide('simplehats:babyturtle'),
	event.hide('simplehats:bandana'),
	event.hide('simplehats:bandanargb'),
	event.hide('simplehats:baseballeaster'),
	event.hide('simplehats:baseballhat'),
	event.hide('simplehats:baseballhatfestive'),
	event.hide('simplehats:baseballhatjuly'),
	event.hide('simplehats:baseballhatrgb'),
	event.hide('simplehats:batwinghat'),
	event.hide('simplehats:beanie'),
	event.hide('simplehats:beanieestaer'),
	event.hide('simplehats:beaniefestive'),
	event.hide('simplehats:beaniejuly'),
	event.hide('simplehats:beaniergb'),
	event.hide('simplehats:beaniespooky'),
	event.hide('simplehats:beehat'),
	event.hide('simplehats:bicorne'),
	event.hide('simplehats:bigbrain'),
	event.hide('simplehats:bigcrown'),
	event.hide('simplehats:bigeyes'),
	event.hide('simplehats:bigribbon'),
	event.hide('simplehats:bigstevehead'),
	event.hide('simplehats:bluefireeye'),
	event.hide('simplehats:bowler'),
	event.hide('simplehats:breadhat'),
	event.hide('simplehats:brownbrick'),
	event.hide('simplehats:bunnyhat'),
	event.hide('simplehats:burgerhat'),
	event.hide('simplehats:caddycap'),
	event.hide('simplehats:camera'),
	event.hide('simplehats:camerabeard'),
	event.hide('simplehats:candleonhead'),
	event.hide('simplehats:candycane'),
	event.hide('simplehats:carrotonstick'),
	event.hide('simplehats:cartoonegg'),
	event.hide('simplehats:cheeseslice'),
	event.hide('simplehats:chefshat'),
	event.hide('simplehats:chickenhead'),
	event.hide('simplehats:chickenonhead'),
	event.hide('simplehats:christmascakehat'),
	event.hide('simplehats:christmastree'),
	event.hide('simplehats:clockface'),
	event.hide('simplehats:cowboy'),
	event.hide('simplehats:cowboyrgb'),
	event.hide('simplehats:crabonhead'),
	event.hide('simplehats:crown'),
	event.hide('simplehats:cuphead'),
	event.hide('simplehats:cyclopseye'),
	event.hide('simplehats:dairyqueen'),
	event.hide('simplehats:dangerqsue'),
	event.hide('simplehats:dangeresquejuly'),
	event.hide('simplehats:demoneyes'),
	event.hide('simplehats:demonhorns'),
	event.hide('simplehats:digger'),
	event.hide('simplehats:dimmahat'),
	event.hide('simplehats:discoball'),
	event.hide('simplehats:disguise'),
	event.hide('simplehats:doctorhat'),
	event.hide('simplehats:dorkglassesandteeth'),
	event.hide('simplehats:doubletake'),
	event.hide('simplehats:dragonhead'),
	event.hide('simplehats:dragonskull'),
	event.hide('simplehats:dragonskullender'),
	event.hide('simplehats:drinkinhat'),
	event.hide('simplehats:dumhat'),
	event.hide('simplehats:dwarfminerbeard'),
	event.hide('simplehats:easterhead'),
	event.hide('simplehats:egghead'),
	event.hide('simplehats:eggonhead'),
	event.hide('simplehats:elfhat'),
	event.hide('simplehats:explorerhat'),
	event.hide('simplehats:eyepatch'),
	event.hide('simplehats:beanieeaster'),
	event.hide('simplehats:dangereqsue'),
	event.hide('simplehats:fakeblight'),
	event.hide('simplehats:fakefire'),
	event.hide('simplehats:farmerbrim'),
	event.hide('simplehats:festiveantlers'),
	event.hide('simplehats:fertiveribbon'),
	event.hide('simplehats:finnhood'),
	event.hide('simplehats:fireworks'),
	event.hide('simplehats:fishonhead'),
	event.hide('simplehats:flagjuly'),
	event.hide('simplehats:flies'),
	event.hide('simplehats:floatinghearts'),
	event.hide('simplehats:floatingstar'),
	event.hide('simplehats:flowercrown'),
	event.hide('simplehats:floweronhead'),
	event.hide('simplehats:foxhat'),
	event.hide('simplehats:fro'),
	event.hide('simplehats:frozenhead'),
	event.hide('simplehats:fullironhelm'),
	event.hide('simplehats:ghostmask'),
	event.hide('simplehats:goggles'),
	event.hide('simplehats:grandmadisguise'),
	event.hide('simplehats:greenbirb'),
	event.hide('simplehats:grinchhat'),
	event.hide('simplehats:halo'),
	event.hide('simplehats:geadbolts'),
	event.hide('simplehats:headphonesblue'),
	event.hide('simplehats:headshot'),
	event.hide('simplehats:hockeymask'),
	event.hide('simplehats:holyhead'),
	event.hide('simplehats:horsemask'),
	event.hide('simplehats:hosthat'),
	event.hide('simplehats:dragonskull'),
	event.hide('simplehats:jackonhat'),
	event.hide('simplehats:jesterhat'),
	event.hide('simplehats:julydouble'),
	event.hide('simplehats:kirbymouthful'),
	event.hide('simplehats:largehorns'),
	event.hide('simplehats:lilbow'),
	event.hide('simplehats:madscientist'),
	event.hide('simplehats:magikarp'),
	event.hide('simplehats:megamanhat'),
	event.hide('simplehats:mistletoe'),
	event.hide('simplehats:mohawk'),
	event.hide('simplehats:monkeyking'),
	event.hide('simplehats:monocle'),
	event.hide('simplehats:moreeyes'),
	event.hide('simplehats:murdered'),
	event.hide('simplehats:nekoears'),
	event.hide('simplehats:palmtree'),
	event.hide('simplehats:paperbag'),
	event.hide('simplehats:partyhat'),
	event.hide('simplehats:paypay'),
	event.hide('simplehats:penguinbaby'),
	event.hide('simplehats:penguinhat'),
	event.hide('simplehats:pighead'),
	event.hide('simplehats:pinhead'),
	event.hide('simplehats:plaguedoctor'),
	event.hide('simplehats:pog'),
	event.hide('simplehats:pohatoe'),
	event.hide('simplehats:policebucket'),
	event.hide('simplehats:policesiren'),
	event.hide('simplehats:festiveribbon'),
	event.hide('simplehats:headbolts'),
	event.hide('simplehats:icedragonskull'),
	event.hide('simplehats:jackohat'),
	event.hide('simplehats:poofballhat'),
	event.hide('simplehats:poofballrgb'),
	event.hide('simplehats:popehat'),
	event.hide('simplehats:potionhead'),
	event.hide('simplehats:presentsstack'),
	event.hide('simplehats:propelhat'),
	event.hide('simplehats:questbook'),
	event.hide('simplehats:rabbitears'),
	event.hide('simplehats:rabbitonhead'),
	event.hide('simplehats:rainboworbiters'),
	event.hide('simplehats:ranahat'),
	event.hide('simplehats:redeyes'),
	event.hide('simplehats:rednose'),
	event.hide('simplehats:redstache'),
	event.hide('simplehats:rgbbigribbon'),
	event.hide('simplehats:rgbbowler'),
	event.hide('simplehats:rgbdragonskull'),
	event.hide('simplehats:rgbdrinkinhat'),
	event.hide('simplehats:rgbeasterhead'),
	event.hide('simplehats:rgbfullhelm'),
	event.hide('simplehats:rgbpartyhat'),
	event.hide('simplehats:rgbsmallbowler'),
	event.hide('simplehats:rgbsunglasses'),
	event.hide('simplehats:rgbtoptophathat'),
	event.hide('simplehats:rgbushanka'),
	event.hide('simplehats:rock'),
	event.hide('simplehats:rubbernipple'),
	event.hide('simplehats:sandcastle'),
	event.hide('simplehats:santaclaus'),
	event.hide('simplehats:sausage'),
	event.hide('simplehats:seaweedhat'),
	event.hide('simplehats:shakehat'),
	event.hide('simplehats:sheep'),
	event.hide('simplehats:shrekears'),
	event.hide('simplehats:shroomcap'),
	event.hide('simplehats:simsgem'),
	event.hide('simplehats:smokingpipe'),
	event.hide('simplehats:snowmanbaby'),
	event.hide('simplehats:sombrero'),
	event.hide('simplehats:sonichood'),
	event.hide('simplehats:spadesoldier'),
	event.hide('simplehats:spiderweb'),
	event.hide('simplehats:springer'),
	event.hide('simplehats:sprout'),
	event.hide('simplehats:spyzombie'),
	event.hide('simplehats:stackofeggs'),
	event.hide('simplehats:stress'),
	event.hide('simplehats:summerhat'),
	event.hide('simplehats:sunglasses'),
	event.hide('simplehats:sunglassesbig'),
	event.hide('simplehats:supersandhat'),
	event.hide('simplehats:swimmer'),
	event.hide('simplehats:tinkerhat'),
	event.hide('simplehats:topcathat'),
	event.hide('simplehats:tophat'),
	event.hide('simplehats:toptophathat'),
	event.hide('simplehats:trangleshades'),
	event.hide('simplehats:tricorne'),
	event.hide('simplehats:tvhead'),
	event.hide('simplehats:unicornhorn'),
	event.hide('simplehats:ushanka'),
	event.hide('simplehats:vikinghatbeard'),
	event.hide('simplehats:villagernose'),
	event.hide('simplehats:winghat'),
	event.hide('simplehats:zigzagwitchhat'),
	event.hide('simplehats:acornhat'),
	event.hide('simplehats:aegishat'),
	event.hide('simplehats:alienphil'),
	event.hide('simplehats:amalgalichhat'),
	event.hide('simplehats:angrymask'),
	event.hide('simplehats:antlers'),
	event.hide('simplehats:apple'),
	event.hide('simplehats:artsy'),
	event.hide('simplehats:babydolphin'),
	
	// Hide Spawn Eggs
	event.hide('allay_spawn_egg'),
	event.hide('axolotl_spawn_egg'),
	event.hide('bat_spawn_egg'),
	event.hide('bee_spawn_egg'),
	event.hide('blaze_spawn_egg'),
	event.hide('cat_spawn_egg'),
	event.hide('cave_spider_spawn_egg'),
	event.hide('chicken_spawn_egg'),
	event.hide('cod_spawn_egg'),
	event.hide('cow_spawn_egg'),
	event.hide('creeper_spawn_egg'),
	event.hide('dolphin_spawn_egg'),
	event.hide('donkey_spawn_egg'),
	event.hide('drowned_spawn_egg'),
	event.hide('elder_guardian_spawn_egg'),
	event.hide('enderman_spawn_egg'),
	event.hide('endermite_spawn_egg'),
	event.hide('evoker_spawn_egg'),
	event.hide('fox_spawn_egg'),
	event.hide('frog_spawn_egg'),
	event.hide('ghast_spawn_egg'),
	event.hide('glow_squid_spawn_egg'),
	event.hide('goat_spawn_egg'),
	event.hide('guardian_spawn_egg'),
	event.hide('hoglin_spawn_egg'),
	event.hide('horse_spawn_egg'),
	event.hide('husk_spawn_egg'),
	event.hide('llama_spawn_egg'),
	event.hide('magma_cube_spawn_egg'),
	event.hide('mooshroom_spawn_egg'),
	event.hide('mule_spawn_egg'),
	event.hide('ocelot_spawn_egg'),
	event.hide('panda_spawn_egg'),
	event.hide('parrot_spawn_egg'),
	event.hide('phantom_spawn_egg'),
	event.hide('pig_spawn_egg'),
	event.hide('piglin_spawn_egg'),
	event.hide('piglin_brute_spawn_egg'),
	event.hide('pillager_spawn_egg'),
	event.hide('polar_bear_spawn_egg'),
	event.hide('pufferfish_spawn_egg'),
	event.hide('rabbit_spawn_egg'),
	event.hide('ravager_spawn_egg'),
	event.hide('salmon_spawn_egg'),
	event.hide('sheep_spawn_egg'),
	event.hide('shulker_spawn_egg'),
	event.hide('silverfish_spawn_egg'),
	event.hide('skeleton_spawn_egg'),
	event.hide('skeleton_horse_spawn_egg'),
	event.hide('slime_spawn_egg'),
	event.hide('spider_spawn_egg'),
	event.hide('squid_spawn_egg'),
	event.hide('stray_spawn_egg'),
	event.hide('strider_spawn_egg'),
	event.hide('tadpole_spawn_egg'),
	event.hide('trader_llama_spawn_egg'),
	event.hide('tropical_fish_spawn_egg'),
	event.hide('turtle_spawn_egg'),
	event.hide('vex_spawn_egg'),
	event.hide('villager_spawn_egg'),
	event.hide('vindicator_spawn_egg'),
	event.hide('wandering_trader_spawn_egg'),
	event.hide('warden_spawn_egg'),
	event.hide('witch_spawn_egg'),
	event.hide('wither_skeleton_spawn_egg'),
	event.hide('wolf_spawn_egg'),
	event.hide('zoglin_spawn_egg'),
	event.hide('zombie_spawn_egg'),
	event.hide('zombie_horse_spawn_egg'),
	event.hide('zombie_villager_spawn_egg'),
	event.hide('zombified_piglin_spawn_egg'),
	event.hide('alexsmobs:spawn_egg_alligator_snapping_turtle'),
	event.hide('alexsmobs:spawn_egg_anaconda'),
	event.hide('alexsmobs:spawn_egg_anteater'),
	event.hide('alexsmobs:spawn_egg_bald_eagle'),
	event.hide('alexsmobs:spawn_egg_banana_slug'),
	event.hide('alexsmobs:spawn_egg_bison'),
	event.hide('alexsmobs:spawn_egg_blobfish'),
	event.hide('alexsmobs:spawn_egg_blue_jay'),
	event.hide('alexsmobs:spawn_egg_bone_serpent'),
	event.hide('alexsmobs:spawn_egg_bunfungus'),
	event.hide('alexsmobs:spawn_egg_cachalot_whale'),
	event.hide('alexsmobs:spawn_egg_capuchin_monkey'),
	event.hide('alexsmobs:spawn_egg_catfish'),
	event.hide('alexsmobs:spawn_egg_centipede'),
	event.hide('alexsmobs:spawn_egg_cockroach'),
	event.hide('alexsmobs:spawn_egg_comb_jelly'),
	event.hide('alexsmobs:spawn_egg_cosmaw'),
	event.hide('alexsmobs:spawn_egg_cosmic_cod'),
	event.hide('alexsmobs:spawn_egg_crimson_mosquito'),
	event.hide('alexsmobs:spawn_egg_crocodile'),
	event.hide('alexsmobs:spawn_egg_crow'),
	event.hide('alexsmobs:spawn_egg_devils_hole_pupfish'),
	event.hide('alexsmobs:spawn_egg_dropbear'),
	event.hide('alexsmobs:spawn_egg_elephant'),
	event.hide('alexsmobs:spawn_egg_emu'),
	event.hide('alexsmobs:spawn_egg_endergrade'),
	event.hide('alexsmobs:spawn_egg_enderiophage'),
	event.hide('alexsmobs:spawn_egg_farseer'),
	event.hide('alexsmobs:spawn_egg_flutter'),
	event.hide('alexsmobs:spawn_egg_fly'),
	event.hide('alexsmobs:spawn_egg_flying_fish'),
	event.hide('alexsmobs:spawn_egg_frilled_shark'),
	event.hide('alexsmobs:spawn_egg_froststalker'),
	event.hide('alexsmobs:spawn_egg_gazelle'),
	event.hide('alexsmobs:spawn_egg_gelada_monkey'),
	event.hide('alexsmobs:spawn_egg_giant_squid'),
	event.hide('alexsmobs:spawn_egg_gorilla'),
	event.hide('alexsmobs:spawn_egg_grizzly_bear'),
	event.hide('alexsmobs:spawn_egg_guster'),
	event.hide('alexsmobs:spawn_egg_hammerhead_shark'),
	event.hide('alexsmobs:spawn_egg_hummingbird'),
	event.hide('alexsmobs:spawn_egg_jerboa'),
	event.hide('alexsmobs:spawn_egg_kangaroo'),
	event.hide('alexsmobs:spawn_egg_komodo_dragon'),
	event.hide('alexsmobs:spawn_egg_laviathan'),
	event.hide('alexsmobs:spawn_egg_leafcutter_ant'),
	event.hide('alexsmobs:spawn_egg_lobster'),
	event.hide('alexsmobs:spawn_egg_maned_wolf'),
	event.hide('alexsmobs:spawn_egg_mantis_shrimp'),
	event.hide('alexsmobs:spawn_egg_mimic_octopus'),
	event.hide('alexsmobs:spawn_egg_mimicube'),
	event.hide('alexsmobs:spawn_egg_moose'),
	event.hide('alexsmobs:spawn_egg_mudskipper'),
	event.hide('alexsmobs:spawn_egg_mungus'),
	event.hide('alexsmobs:spawn_egg_murmur'),
	event.hide('alexsmobs:spawn_egg_orca'),
	event.hide('alexsmobs:spawn_egg_platypus'),
	event.hide('alexsmobs:spawn_egg_potoo'),
	event.hide('alexsmobs:spawn_egg_raccoon'),
	event.hide('alexsmobs:spawn_egg_rain_frog'),
	event.hide('alexsmobs:spawn_egg_rattlesnake'),
	event.hide('alexsmobs:spawn_egg_rhinoceros'),
	event.hide('alexsmobs:spawn_egg_roadrunner'),
	event.hide('alexsmobs:spawn_egg_rocky_roller'),
	event.hide('alexsmobs:spawn_egg_seagull'),
	event.hide('alexsmobs:spawn_egg_seal'),
	event.hide('alexsmobs:spawn_egg_shoebill'),
	event.hide('alexsmobs:spawn_egg_skelewag'),
	event.hide('alexsmobs:spawn_egg_skreecher'),
	event.hide('alexsmobs:spawn_egg_skunk'),
	event.hide('alexsmobs:spawn_egg_snow_leopard'),
	event.hide('alexsmobs:spawn_egg_soul_vulture'),
	event.hide('alexsmobs:spawn_egg_spectre'),
	event.hide('alexsmobs:spawn_egg_straddler'),
	event.hide('alexsmobs:spawn_egg_stradpole'),
	event.hide('alexsmobs:spawn_egg_sugar_glider'),
	event.hide('alexsmobs:spawn_egg_sunbird'),
	event.hide('alexsmobs:spawn_egg_tarantula_hawk'),
	event.hide('alexsmobs:spawn_egg_tasmanian_devil'),
	event.hide('alexsmobs:spawn_egg_terrapin'),
	event.hide('alexsmobs:spawn_egg_tiger'),
	event.hide('alexsmobs:spawn_egg_toucan'),
	event.hide('alexsmobs:spawn_egg_tusklin'),
	event.hide('alexsmobs:spawn_egg_underminer'),
	event.hide('alexsmobs:spawn_egg_void_worm'),
	event.hide('alexsmobs:spawn_egg_warped_toad'),
	event.hide('alexsmobs:spawn_egg_warped_mosco'),
	event.hide('cataclysm:amethyst_crab_spawn_egg'),
	event.hide('cataclysm:coralssus_spawn_egg'),
	event.hide('cataclysm:deepling_angler_spawn_egg'),
	event.hide('cataclysm:deepling_brute_spawn_egg'),
	event.hide('cataclysm:deepling_priest_spawn_egg'),
	event.hide('cataclysm:deepling_spawn_egg'),
	event.hide('cataclysm:ender_golem_spawn_egg'),
	event.hide('cataclysm:ender_guardian_spawn_egg'),
	event.hide('cataclysm:endermaptera_spawn_egg'),
	event.hide('cataclysm:ignis_spawn_egg'),
	event.hide('cataclysm:ignited_revenant_spawn_egg'),
	event.hide('cataclysm:lionfish_spawn_egg'),
	event.hide('cataclysm:nameless_sorcerer_spawn_egg'),
	event.hide('cataclysm:netherite_monstrosity_spawn_egg'),
	event.hide('cataclysm:the_baby_leviathan_spawn_egg'),
	event.hide('cataclysm:the_harbinger_spawn_egg'),
	event.hide('cataclysm:the_leviathan_spawn_egg'),
	event.hide('guardvillagers:guard_spawn_egg'),
	event.hide('guardvillagers:illusioner_spawn_egg'),
	event.hide('guardvillagers:iron_golem_spawn_egg'),
	event.hide('guardvillagers:snow_golem_spawn_egg'),
	event.hide('meetyourfight:bellringer_spawn_egg'),
	event.hide('meetyourfight:dame_fortuna_spawn_egg'),
	event.hide('meetyourfight:rosalyne_spawn_egg'),
	event.hide('meetyourfight:swampjaw_spawn_egg')
	event.hide('neapolitan:chimpanzee_spawn_egg')
	event.hide('neapolitan:plantain_spider_spawn_egg')
	event.hide('quark:crab_spawn_egg'),
	event.hide('quark:forgotten_spawn_egg'),
	event.hide('quark:foxhound_spawn_egg'),
	event.hide('quark:shiba_spawn_egg'),
	event.hide('quark:stoneling_spawn_egg'),
	event.hide('quark:toretoise_spawn_egg'),
	event.hide('quark:wraith_spawn_egg'),
	event.hide('savage_and_ravage:executioner_spawn_egg'),
	event.hide('savage_and_ravage:griefer_spawn_egg'),
	event.hide('savage_and_ravage:iceologer_spawn_egg'),
	event.hide('savage_and_ravage:skeleton_villager_spawn_egg'),
	event.hide('savage_and_ravage:trickster_spawn_egg'),
	event.hide('upgrade_aquatic:flare_spawn_egg'),
	event.hide('upgrade_aquatic:goose_spawn_egg'),
	event.hide('upgrade_aquatic:great_thrasher_spawn_egg'),
	event.hide('upgrade_aquatic:lionfish_spawn_egg'),
	event.hide('upgrade_aquatic:nautilus_spawn_egg'),
	event.hide('upgrade_aquatic:perch_spawn_egg'),
	event.hide('upgrade_aquatic:pike_spawn_egg'),
	event.hide('upgrade_aquatic:thrasher_spawn_egg'),
	event.hide('bygonenether:corpor_spawn_egg'),
	event.hide('bygonenether:piglin_hunter_spawn_egg'),
	event.hide('bygonenether:piglin_prisoner_spawn_egg'),
	event.hide('bygonenether:warped_enderman_spawn_egg'),
	event.hide('bygonenether:wex_spawn_egg'),
	event.hide('bygonenether:wither_skeleton_horse_spawn_egg'),
	event.hide('bygonenether:wither_skeleton_knight_spawn_egg'),
	event.hide('bygonenether:wraither_spawn_egg'),
	event.hide('dungeons_mobs:blastling_spawn_egg'),
	event.hide('dungeons_mobs:drowned_necromancer_spawn_egg'),
	event.hide('dungeons_mobs:endersent_spawn_egg'),
	event.hide('dungeons_mobs:frozen_zombie_spawn_egg'),
	event.hide('dungeons_mobs:fungus_thrower_spawn_egg'),
	event.hide('dungeons_mobs:geomancer_spawn_egg'),
	event.hide('dungeons_mobs:iceologer_spawn_egg'),
	event.hide('dungeons_mobs:icy_creeper_spawn_egg'),
	event.hide('dungeons_mobs:illusioner_spawn_egg'),
	event.hide('dungeons_mobs:jungle_zombie_spawn_egg'),
	event.hide('dungeons_mobs:leapleaf_spawn_egg'),
	event.hide('dungeons_mobs:mage_spawn_egg'),
	event.hide('dungeons_mobs:mossy_skeleton_spawn_egg'),
	event.hide('dungeons_mobs:mountaineer_spawn_egg'),
	event.hide('dungeons_mobs:necromancer_spawn_egg'),
	event.hide('dungeons_mobs:poison_anemone_spawn_egg'),
	event.hide('dungeons_mobs:poison_quill_vine_spawn_egg'),
	event.hide('dungeons_mobs:quick_growing_kelp_spawn_egg'),
	event.hide('dungeons_mobs:quick_growing_vine_spawn_egg'),
	event.hide('dungeons_mobs:redstone_golem_spawn_egg'),
	event.hide('dungeons_mobs:royal_guard_spawn_egg'),
	event.hide('dungeons_mobs:skeleton_vanguard_spawn_egg'),
	event.hide('dungeons_mobs:snareling_spawn_egg'),
	event.hide('dungeons_mobs:squall_golem_spawn_egg'),
	event.hide('dungeons_mobs:sunken_skeleton_spawn_egg'),
	event.hide('dungeons_mobs:watchling_spawn_egg'),
	event.hide('dungeons_mobs:wavewhisperer_spawn_egg'),
	event.hide('dungeons_mobs:whisperer_spawn_egg'),
	event.hide('dungeons_mobs:whisperer_spawn_egg'),
	event.hide('dungeons_mobs:wildfire_spawn_egg'),
	event.hide('dungeons_mobs:windcaller_spawn_egg'),
	event.hide('dungeons_mobs:wraith_spawn_egg'),
	event.hide('dungeons_mobs:zombified_fungus_thrower_spawn_egg'),
	event.hide('phantasm:crystie_spawn_egg'),
	event.hide('illagerrevolutionmod:blade_knight_spawn_egg'),
	event.hide('illagerrevolutionmod:illagerbeasttamer_spawn_egg'),
	event.hide('illagerrevolutionmod:illagerminer_spawn_egg'),
	event.hide('illagerrevolutionmod:illagerminerbadlands_spawn_egg'),
	event.hide('illagerrevolutionmod:mauler_spawn_egg'),
	event.hide('illagerrevolutionmod:raker_spawn_egg'),
	event.hide('illagerrevolutionmod:scrounger_spawn_egg'),
	event.hide('illagerrevolutionmod:soul_sage_spawn_egg'),
	event.hide('illagerrevolutionmod:wild_ravager_spawn_egg'),
	event.hide('mimic:mimic_spawn_egg'),
	event.hide('monstersandmushrooms:avala_spawn_egg'),
	event.hide('monstersandmushrooms:bugsy_spawn_egg'),
	event.hide('monstersandmushrooms:gnome_spawn_egg'),
	event.hide('monstersandmushrooms:maggart_spawn_egg'),
	event.hide('monstersandmushrooms:shroomster_spawn_egg'),
	event.hide('skeletalremains:charred_spawn_egg'),
	event.hide('skeletalremains:overgrown_spawn_egg'),
	event.hide('skeletalremains:sharpshooter_spawn_egg'),
	event.hide('skeletalremains:sunken_spawn_egg'),
	event.hide('skeletalremains:swamped_spawn_egg'),
	event.hide('mutantmore:mutant_blaze_spawn_egg'),
	event.hide('mutantmore:mutant_shulker_spawn_egg'),
	event.hide('mutantmore:mutant_wither_skeleton_spawn_egg'),
	event.hide('mutantmore:rodling_spawn_egg'),
	event.hide('pots_and_mimics:end_pot_crab_spawn_egg'),
	event.hide('pots_and_mimics:nether_pot_crab_spawn_egg'),
	event.hide('pots_and_mimics:poison_pot_crab_spawn_egg'),
	event.hide('pots_and_mimics:pot_crab_spawn_egg'),
	
	// Hide Waystones
	event.hide('waystones:waystone'),
	event.hide('waystones:mossy_waystone'),
	event.hide('waystones:sandy_waystone'),
	event.hide('waystones:sharestone'),
	event.hide('waystones:warp_plate'),
	event.hide('waystones:portstone'),
	event.hide('waystones:white_sharestone'),
	event.hide('waystones:orange_sharestone'),
	event.hide('waystones:magenta_sharestone'),
	event.hide('waystones:light_blue_sharestone'),
	event.hide('waystones:yellow_sharestone'),
	event.hide('waystones:lime_sharestone'),
	event.hide('waystones:pink_sharestone'),
	event.hide('waystones:gray_sharestone'),
	event.hide('waystones:light_gray_sharestone'),
	event.hide('waystones:cyan_sharestone'),
	event.hide('waystones:purple_sharestone'),
	event.hide('waystones:blue_sharestone'),
	event.hide('waystones:brown_sharestone'),
	event.hide('waystones:green_sharestone'),
	event.hide('waystones:red_sharestone'),
	event.hide('waystones:black_sharestone'),
	event.hide('waystones:return_scroll'),
	event.hide('waystones:bound_scroll'),
	event.hide('waystones:warp_scroll'),
	event.hide('waystones:warp_stone'),
	event.hide('waystones:warp_dust'),
	event.hide('waystones:attuned_shard'),

	// Hide Meet Your Fight
	event.hide('meetyourfight:haunted_bell'),
	event.hide('meetyourfight:passages_toll'),
	event.hide('meetyourfight:devils_ante'),
	event.hide('meetyourfight:fossil_bait'),
	event.hide('meetyourfight:dusk_key'),
	event.hide('meetyourfight:haunted_bell'),

	// Hide Summoning Rituals
	event.hide('summoningrituals:altar'),
	// Can't hide both because all the Summoning Rituals dissapear with them
	//event.hide('summoningrituals:indestructible_altar'),

	// Hide Straw Statue
	event.hide('strawstatues:straw_statue'),

	// Hide Potions
	event.hide('minecraft:potion'),
	event.hide('minecraft:splash_potion'),
	event.hide('minecraft:lingering_potion'),
	event.hide('revised_phantoms:levitation_potion'),
	event.hide('revised_phantoms:levitation_potion_ext'),
	event.hide('dynamictrees:dendro_potion'),

	// Hide Enchanted Books & Ancient Tomes
	event.hide('minecraft:enchanted_book'),
	event.hide('quark:ancient_tome'),

	// Hide Monsters & Mushrooms items
	event.hide('minecraft:enchanted_book'),

	// Hide Banned Blocks GUI
	event.hide('minecraft:anvil'),
	event.hide('minecraft:chipped_anvil'),
	event.hide('minecraft:damaged_anvil'),
	event.hide('minecraft:enchanting_table'),
	event.hide('minecraft:brewing_stand'),
	event.hide('minecraft:smithing_table'),
	event.hide('cataclysm:mechanical_fusion_anvil'),

	// Hide Monsters & Mushrooms items
	event.hide('monstersandmushrooms:bugsy_helmet'),
	event.hide('monstersandmushrooms:bugsy_chestplate'),
	event.hide('monstersandmushrooms:bugsy_leggings'),
	event.hide('monstersandmushrooms:bugsy_boots'),

	event.hide('monstersandmushrooms:shroomster_helmet'),
	event.hide('monstersandmushrooms:shroomster_chestplate'),
	event.hide('monstersandmushrooms:shroomster_leggings'),
	event.hide('monstersandmushrooms:shroomster_boots'),

	event.hide('monstersandmushrooms:maggart_helmet'),
	event.hide('monstersandmushrooms:maggart_chestplate'),
	event.hide('monstersandmushrooms:maggart_leggings'),
	event.hide('monstersandmushrooms:maggart_boots'),

	event.hide('monstersandmushrooms:bugsywand'),
	event.hide('monstersandmushrooms:shroomsterstaff'),
	event.hide('monstersandmushrooms:maggartstaff'),

	event.hide('monstersandmushrooms:magic_mushroom'),
	event.hide('monstersandmushrooms:insect_leg'),
	event.hide('monstersandmushrooms:ice_crystal'),
	event.hide('monstersandmushrooms:rare_earth'),
	event.hide('monstersandmushrooms:suspicious_leaf'),

	event.hide('monstersandmushrooms:rocky_moss'),
	event.hide('monstersandmushrooms:calcite_bricks'),
	event.hide('monstersandmushrooms:cobbled_coal'),
	event.hide('monstersandmushrooms:icy_deepslate_tiles'),
	event.hide('monstersandmushrooms:polished_amethyst'),

	// Hide Alexsmobs items
	event.hide('alexsmobs:transmutation_table'),
	event.hide('alexsmobs:tarantula_hawk_elytra'),
	event.hide('alexsmobs:tarantula_hawk_wing'),
	// If we remove this item this whole script is not running
	//event.hide('alexsmobs:endolocator'}

	// Hide Structure GEL items
	event.hide('structure_gel:red_gel'),
	event.hide('structure_gel:blue_gel'),
	event.hide('structure_gel:green_gel'),
	event.hide('structure_gel:cyan_gel'),
	event.hide('structure_gel:orange_gel'),
	event.hide('structure_gel:yellow_gel'),
	event.hide('structure_gel:data_handler'),
	event.hide('structure_gel:dynamic_spawner'),
	event.hide('structure_gel:building_tool')

	// Hide Upgrade Aquatic unobtainable items
	event.hide('upgrade_aquatic:tongue_kelp'),
	event.hide('upgrade_aquatic:tongue_kelp_block'),
	event.hide('upgrade_aquatic:thorny_kelp_block'),
	event.hide('upgrade_aquatic:ochre_kelp_block'),
	event.hide('upgrade_aquatic:polar_kelp_block'),
	event.hide('upgrade_aquatic:tongue_kelpy_cobblestone'),
	event.hide('upgrade_aquatic:tongue_kelpy_cobblestone_stairs'),
	event.hide('upgrade_aquatic:tongue_kelpy_cobblestone_slab'),
	event.hide('upgrade_aquatic:tongue_kelpy_cobblestone_vertical_slab'),
	event.hide('upgrade_aquatic:tongue_kelpy_stone_bricks'),
	event.hide('upgrade_aquatic:tongue_kelpy_stone_brick_stairs'),
	event.hide('upgrade_aquatic:tongue_kelpy_stone_brick_slab'),
	event.hide('upgrade_aquatic:tongue_kelpy_stone_brick_vertical_slab'),
	event.hide('upgrade_aquatic:thorny_kelp'),
	event.hide('upgrade_aquatic:thorny_kelpy_cobblestone'),
	event.hide('upgrade_aquatic:thorny_kelpy_cobblestone_stairs'),
	event.hide('upgrade_aquatic:thorny_kelpy_cobblestone_slab'),
	event.hide('upgrade_aquatic:thorny_kelpy_cobblestone_vertical_slab'),
	event.hide('upgrade_aquatic:thorny_kelpy_stone_bricks'),
	event.hide('upgrade_aquatic:thorny_kelpy_stone_brick_stairs'),
	event.hide('upgrade_aquatic:thorny_kelpy_stone_brick_slab'),
	event.hide('upgrade_aquatic:thorny_kelpy_stone_brick_vertical_slab'),
	event.hide('upgrade_aquatic:polar_kelp'),
	event.hide('upgrade_aquatic:polar_kelpy_cobblestone'),
	event.hide('upgrade_aquatic:polar_kelpy_cobblestone_stairs'),
	event.hide('upgrade_aquatic:polar_kelpy_cobblestone_slab'),
	event.hide('upgrade_aquatic:polar_kelpy_cobblestone_vertical_slab'),
	event.hide('upgrade_aquatic:polar_kelpy_stone_bricks'),
	event.hide('upgrade_aquatic:polar_kelpy_stone_brick_stairs'),
	event.hide('upgrade_aquatic:polar_kelpy_stone_brick_slab'),
	event.hide('upgrade_aquatic:polar_kelpy_stone_brick_vertical_slab'),
	event.hide('upgrade_aquatic:ochre_kelp'),
	event.hide('upgrade_aquatic:ochre_kelpy_cobblestone'),
	event.hide('upgrade_aquatic:ochre_kelpy_cobblestone_stairs'),
	event.hide('upgrade_aquatic:ochre_kelpy_cobblestone_slab'),
	event.hide('upgrade_aquatic:ochre_kelpy_cobblestone_vertical_slab'),
	event.hide('upgrade_aquatic:ochre_kelpy_stone_bricks'),
	event.hide('upgrade_aquatic:ochre_kelpy_stone_brick_stairs'),
	event.hide('upgrade_aquatic:ochre_kelpy_stone_brick_slab'),
	event.hide('upgrade_aquatic:ochre_kelpy_stone_brick_vertical_slab')

})