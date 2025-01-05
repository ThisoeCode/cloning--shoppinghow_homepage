


/** A preparation of everything type. */
export type preThisoe = 
string|number|boolean|undefined|null|
Error

/** An everything type. */
export type Thisoe = preThisoe|preThisoe[]|
Record<string,preThisoe>|(()=>preThisoe)