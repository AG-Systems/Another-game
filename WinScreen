public var WinGameSceneName : String = "";
public var waitBeforeLoad : float = 0.0;
public var FoundGameObject : GameObject;

function OnTriggerEnter(other:Collider){

	if(WinGameSceneName){
		if(FoundGameObject.activeSelf){
			yield WaitForSeconds(waitBeforeLoad);
			Application.LoadLevel(WinGameSceneName);
			}else Debug.LogError("Cannot Find FOUNDGAMEOBJECT"+FoundGameObject.ToString());
	}else Debug.LogError("No Scene Name Entered");
}
