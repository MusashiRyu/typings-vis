// Type definitions for vis.js
// Project: https://github.com/almende/vis
// Definitions by: Adrian Caballero at Epic Labs <adrian@epiclabs.io>
//                 Michaël Bitard <>
//                 Pat Sissons  <>
// Definitions: ---

declare namespace __vis {
  type IdType = string | number;
  type SubgroupType = IdType;
  type DateType = Date | number | string | moment.Moment;
  type HeightWidthType = IdType;
  type TimelineTimeAxisScaleType = 'millisecond' | 'second' | 'minute' | 'hour' | 'weekday' | 'day' | 'month' | 'year';
  type TimelineEventPropertiesResultWhatType = 'item' | 'background' | 'axis' | 'group-label' | 'custom-time' | 'current-time';
  type TimelineEvents =
    'currentTimeTick' |
    'click' |
    'contextmenu' |
    'doubleClick' |
    'groupDragged' |
    'changed' |
    'rangechange' |
    'rangechanged' |
    'select' |
    'timechange' |
    'timechanged';

  interface DataItem {
    className?: string;
    content: string;
    end?: DateType;
    group?: any;
    id?: IdType;
    start: DateType;
    style?: string;
    subgroup?: SubgroupType;
    title?: string;
    type?: string;
    editable?: boolean;
  }

  interface DataGroup {
    className?: string;
    content: string;
    id: IdType;
    style?: string;
    subgroup?: SubgroupType;
    title?: string;
  }

  interface TimelineEditableOption {
    add?: boolean;
    remove?: boolean;
    updateGroup?: boolean;
    updateTime?: boolean;
  }

  interface TimelineGroupEditableOption {
    add?: boolean;
    remove?: boolean;
    order?: boolean;
  }

  interface TimelineMarginItem {
    horizontal?: number;
    vertical?: number;
  }

  type TimelineMarginItemType = number | TimelineMarginItem;

  interface TimelineMarginOption {
    axis?: number;
    item?: TimelineMarginItemType;
  }

  interface TimelineOrientationOption {
    axis?: string;
    item?: string;
  }

  interface TimelineTimeAxisOption {
    scale?: TimelineTimeAxisScaleType;
    step?: number;
  }

  type TimelineOptionsConfigureFunction = (option: string, path: Array<string>) => boolean;
  type TimelineOptionsConfigureType = boolean | TimelineOptionsConfigureFunction;
  type TimelineOptionsDataAttributesType = boolean | string | string[];
  type TimelineOptionsEditableType = boolean | TimelineEditableOption;
  type TimelineOptionsGroupEditableType = boolean | TimelineGroupEditableOption;
  type TimelineOptionsGroupOrderType = string | Function; // TODO
  type TimelineOptionsGroupOrderSwapFunction = (fromGroup: any, toGroup: any, groups: DataSet<DataGroup>) => void;
  type TimelineOptionsMarginType = number | TimelineMarginOption;
  type TimelineOptionsOrientationType = string | TimelineOrientationOption;
  type TimelineOptionsSnapFunction = (date: Date, scale: string, step: number) => Date | number;
  // type TimelineOptions =

  interface TimelineOptions {
    align?: string;
    autoResize?: boolean;
    clickToUse?: boolean;
    configure?: TimelineOptionsConfigureType;
    dataAttributes?: TimelineOptionsDataAttributesType;
    editable?: TimelineOptionsEditableType;
    end?: DateType;
    format?: any; // TODO
    groupEditable?: TimelineOptionsGroupEditableType;
    groupOrder?: TimelineOptionsGroupOrderType;
    groupOrderSwap?: TimelineOptionsGroupOrderSwapFunction;
    groupTemplate?: Function; // TODO
    height?: HeightWidthType;
    hiddenDates?: any; // TODO
    itemsAlwaysDraggable?: boolean;
    locale?: string;
    locales?: any; // TODO
    moment?: Function; // TODO
    margin?: TimelineOptionsMarginType;
    max?: DateType;
    maxHeight?: HeightWidthType;
    maxMinorChars?: number;
    min?: DateType;
    minHeight?: HeightWidthType;
    moveable?: boolean;
    multiselect?: boolean;
    multiselectPerGroup?: boolean;
    onAdd?: Function; // TODO
    onAddGroup?: Function; // TODO
    onUpdate?: Function; // TODO
    onMove?: Function; // TODO
    onMoveGroup?: Function; // TODO
    onMoving?: Function; // TODO
    onRemove?: Function; // TODO
    onRemoveGroup?: Function; // TODO
    order?: Function; // TODO
    orientation?: TimelineOptionsOrientationType;
    selectable?: boolean;
    showCurrentTime?: boolean;
    showMajorLabels?: boolean;
    showMinorLabels?: boolean;
    stack?: boolean;
    snap?: TimelineOptionsSnapFunction;
    start?: DateType;
    template?: Function; // TODO
    throttleRedraw?: number;
    timeAxis?: TimelineTimeAxisOption;
    type?: string;
    width?: HeightWidthType;
    zoomable?: boolean;
    zoomKey?: string;
    zoomMax?: number;
    zoomMin?: number;
  }

  interface TimelineFitAnimation {
    duration?: number;
    easingFunction?: string;
  }

  type TimelineFitAnimationType = boolean | TimelineFitAnimation;

  interface TimelineFitOptions {
    animation?: TimelineFitAnimationType;
  }

  interface TimelineEventPropertiesResult {
    group?: number;
    item?: number;
    pageX: number;
    pageY: number;
    x: number;
    y: number;
    time: Date;
    snappedTime: Date;
    what?: TimelineEventPropertiesResultWhatType;
    event: Event;
  }

  export class DataSet<T extends DataItem | DataGroup> {
    constructor(items: Array<T>);

    length: number;
  }

  export class DataView<T extends DataItem | DataGroup> {
    constructor(items: Array<T>);

    length: number;
  }

  type DataItemCollectionType = Array<DataItem> | DataSet<DataItem> | DataView<DataItem>;
  type DataGroupCollectionType = Array<DataGroup> | DataSet<DataGroup> | DataView<DataGroup>;

  export class Timeline {
    constructor(
      container: HTMLElement,
      items: DataItemCollectionType,
      groups: DataGroupCollectionType,
      options?: TimelineOptions
    );
    constructor(
      container: HTMLElement,
      items: DataItemCollectionType,
      options?: TimelineOptions
    );

    addCustomTime(time: DateType, id?: IdType): IdType;
    destroy(): void;
    fit(options?: TimelineFitOptions): void;
    focus(id: IdType, options?: TimelineFitOptions): void;
    focus(ids: Array<IdType>, options?: TimelineFitOptions): void;
    getCurrentTime(): Date;
    getCustomTime(id?: IdType): Date;
    getEventProperties(event: Event): TimelineEventPropertiesResult;
    getItemRange(): any; // TODO
    getSelection(): Array<IdType>;
    getVisibleItems(): Array<IdType>;
    getWindow(): Window;
    moveTo(time: DateType, options?: TimelineFitOptions): void;
    on(event: TimelineEvents, callback: Function): void;
    off(event: TimelineEvents, callback: Function): void;
    redraw(): void;
    removeCustomTime(id: IdType): void;
    setCurrentTime(time: DateType): void;
    setCustomTime(time: DateType, id?: IdType): void;
    setCustomTimeTitle(title: string, id?: IdType): void;
    setData(data: { groups?: DataGroupCollectionType; items?: DataItemCollectionType }): void;
    setGroups(groups?: DataGroupCollectionType): void;
    setItems(items: DataItemCollectionType): void;
    setOptions(options: TimelineOptions): void;
    setSelection(id: IdType): void;
    setSelection(ids: Array<IdType>): void;
    setWindow(start: DateType, end: DateType, options?: TimelineFitOptions): void;
  }

  export interface ITimelineStatic {
      new(id: HTMLElement, data: any, options?: any): __vis.ITimeline;
  }

  export interface ITimeline {
      setGroups(groups?: ITimelineGroup[]): void;
      setItems(items?: ITimelineItem[]): void;
      getWindow(): ITimelineWindow;
      setWindow(start: any, date: any): void;
      focus(selection: any): void;
      on(event?: string, callback?: (properties: any) => void): void;
  }

  export interface ITimelineWindow {
      start: Date;
      end: Date;
  }

  export interface ITimelineItem {
      id: number;
      content: string;
      group?: number;
      start: number;
      end?: number;
      editable?: boolean;
  }

  export interface ITimelineOptions {
      stack?: boolean;
      start?: any;
      end?: any;
      orientation?: string;
  }

  export interface ITimelineGroup {
      id: number;
      content: string;
      style?: string;
  }

  export interface IVisSelectProperties {
      items: number[];
  }

  export interface INetwork {
      network?: any;
      selectNodes?(nodeIds: string[], highlightEdges?: boolean): void;
      unselectAll?(): void;
      fit?(): void;
  }

  /**
   * Network is a visualization to display networks and networks consisting of nodes and edges.
   * The visualization is easy to use and supports custom shapes, styles, colors, sizes, images, and more.
   * The network visualization works smooth on any modern browser for up to a few thousand nodes and edges.
   * To handle a larger amount of nodes, Network has clustering support. Network uses HTML canvas for rendering.
   * 
   * @export
   * @class Network
   * @implements {INetwork}
   */
  export class Network {

    /**
     * Creates an instance of Network.
     * 
     * @param {HTMLElement} container the HTML element representing the network container
     * @param {IData} data network data
     * @param {IOptions} [options] optional network options
     * 
     * @memberOf Network
     */
    constructor(container: HTMLElement, data: IData, options?: IOptions);

    /**
     * 	Remove the network from the DOM and remove all Hammer bindings and references.
     * 
     * @memberOf Network
     */
    destroy(): void;

    /**
     * Override all the data in the network.
     * If stabilization is enabled in the physics module,
     * the network will stabilize again.
     * This method is also performed when first initializing the network.
     * 
     * @param {IData} data network data
     * 
     * @memberOf Network
     */
    setData(data: IData): void;

    /**
     * Set the options.
     * All available options can be found in the modules above.
     * Each module requires it's own container with the module name to contain its options.
     * 
     * @param {IOptions} options network options
     * 
     * @memberOf Network
     */
    setOptions(options: IOptions): void;

    /**
     * Set an event listener.
     * Depending on the type of event you get different parameters for the callback function.
     * 
     * @param {string} eventName the name of the event, f.e. 'click'
     * @param {(params?: any) => void} callback the callback function that will be raised
     * 
     * @memberOf Network
     */
    on(eventName: string, callback: (params?: any) => void): void;

    /**
     * Remove an event listener.
     * The function you supply has to be the exact same as the one you used in the on function.
     * If no function is supplied, all listeners will be removed.
     * 
     * @param {string} eventName the name of the event, f.e. 'click'
     * @param {(params?: any) => void} [callback] the exact same callback function that was used when calling 'on'
     * 
     * @memberOf Network
     */
    off(eventName: string, callback?: (params?: any) => void): void;

    /**
     * Set an event listener only once.
     * After it has taken place, the event listener will be removed.
     * Depending on the type of event you get different parameters for the callback function.
     * 
     * @param {string} eventName the name of the event, f.e. 'click'
     * @param {(params?: any) => void} callback the callback function that will be raised once
     * 
     * @memberOf Network
     */
    once(eventName: string, callback: (params?: any) => void): void;

    /**
     * This function converts canvas coordinates to coordinates on the DOM.
     * Input and output are in the form of {x:Number, y:Number} (IPosition interface).
     * The DOM values are relative to the network container.
     * 
     * @param {IPosition} position the canvas coordinates
     * @returns {IPosition} the DOM coordinates
     * 
     * @memberOf Network
     */
    canvasToDOM(position: IPosition): IPosition;

    /**
     * This function converts DOM coordinates to coordinates on the canvas.
     * Input and output are in the form of {x:Number,y:Number} (IPosition interface).
     * The DOM values are relative to the network container.
     * 
     * @param {IPosition} position the DOM coordinates
     * @returns {IPosition} the canvas coordinates
     * 
     * @memberOf Network
     */
    DOMtoCanvas(position: IPosition): IPosition;

    /**
     * Redraw the network.
     * 
     * @memberOf Network
     */
    redraw(): void;

    /**
     * Set the size of the canvas.
     * This is automatically done on a window resize.
     * 
     * @param {string} width width in a common format, f.e. '100px'
     * @param {string} height height in a common format, f.e. '100px'
     * 
     * @memberOf Network
     */
    setSize(width: string, height: string): void;

    /**
     * The joinCondition function is presented with all nodes.
     * 
     * @param {IClusterOptions} [options]
     * 
     * @memberOf Network
     */
    cluster(options?: IClusterOptions): void;

    /**
     * 	This method looks at the provided node and makes a cluster of it and all it's connected nodes.
     * The behaviour can be customized by proving the options object.
     * All options of this object are explained below.
     * The joinCondition is only presented with the connected nodes.
     * 
     * @param {string} nodeId the id of the node
     * @param {IClusterOptions} [options] the cluster options
     * 
     * @memberOf Network
     */
    clusterByConnection(nodeId: string, options?: IClusterOptions): void;

    /**
     * This method checks all nodes in the network and those with a equal or higher
     * amount of edges than specified with the hubsize qualify.
     * If a hubsize is not defined, the hubsize will be determined as the average
     * value plus two standard deviations. 
     * For all qualifying nodes, clusterByConnection is performed on each of them.
     * The options object is described for clusterByConnection and does the same here.
     * 
     * @param {number} [hubsize] optional hubsize
     * @param {IClusterOptions} [options] optional cluster options
     * 
     * @memberOf Network
     */
    clusterByHubsize(hubsize?: number, options?: IClusterOptions): void;

    /**
     * This method will cluster all nodes with 1 edge with their respective connected node.
     * 
     * @param {IClusterOptions} [options] optional cluster options
     * 
     * @memberOf Network
     */
    clusterOutliers(options?: IClusterOptions): void;

    /**
     * Nodes can be in clusters.
     * Clusters can also be in clusters.
     * This function returns an array of nodeIds showing where the node is. 
     *
     * Example:
     * cluster 'A' contains cluster 'B', cluster 'B' contains cluster 'C',
     * cluster 'C' contains node 'fred'.
     * 
     * network.clustering.findNode('fred') will return ['A','B','C','fred'].
     * 
     * @param {string} nodeId the node id.
     * @returns {string[]} an array of nodeIds showing where the node is
     * 
     * @memberOf Network
     */
    findNode(nodeId: string): string[];

    /**
     * Returns true if the node whose ID has been supplied is a cluster.
     * 
     * @param {string} nodeId the node id.
     * @returns {boolean}
     * 
     * @memberOf Network
     */
    isCluster(nodeId: string): boolean;

    /**
     * Returns an array of all nodeIds of the nodes that
     * would be released if you open the cluster.
     * 
     * @param {string} clusterNodeId the id of the cluster node
     * @returns {string[]}
     * 
     * @memberOf Network
     */
    getNodesInCluster(clusterNodeId: string): string[];

    /**
     * Opens the cluster, releases the contained nodes and edges,
     * removing the cluster node and cluster edges.
     * The options object is optional and currently supports one option,
     * releaseFunction, which is a function that can be used to manually
     * position the nodes after the cluster is opened. 
     * 
     * @param {string} nodeId the node id
     * @param {IOpenClusterOptions} [options] optional open cluster options
     * 
     * @memberOf Network
     */
    openCluster(nodeId: string, options?: IOpenClusterOptions): void;

    /**
     * If you like the layout of your network
     * and would like it to start in the same way next time,
     * ask for the seed using this method and put it in the layout.randomSeed option.
     * 
     * @returns {number} the current seed of the network.
     * 
     * @memberOf Network
     */
    getSeed(): number;

    /**
     * 	Programatically enable the edit mode.
     * Similar effect to pressing the edit button.
     * 
     * @memberOf Network
     */
    enableEditMode(): void;

    /**
     * Programatically disable the edit mode.
     * Similar effect to pressing the close icon (small cross in the corner of the toolbar).
     * 
     * @memberOf Network
     */
    disableEditMode(): void;

    /**
     * 	Go into addNode mode. Having edit mode or manipulation enabled is not required.
     * To get out of this mode, call disableEditMode().
     * The callback functions defined in handlerFunctions still apply.
     * To use these methods without having the manipulation GUI, make sure you set enabled to false.
     * 
     * @memberOf Network
     */
    addNodeMode(): void;

    /**
     * Edit the selected node.
     * The explaination from addNodeMode applies here as well.
     * 
     * @memberOf Network
     */
    editNode(): void;

    /**
     * Go into addEdge mode.
     * The explaination from addNodeMode applies here as well.
     * 
     * @memberOf Network
     */
    addEdgeMode(): void;

    /**
     * Go into editEdge mode.
     * The explaination from addNodeMode applies here as well.
     * 
     * @memberOf Network
     */
    editEdgeMode(): void;

    /**
     * Delete selected.
     * Having edit mode or manipulation enabled is not required.
     * 
     * @memberOf Network
     */
    deleteSelected(): void;

    /**
     * Returns the x y positions in canvas space of the nodes with the supplied nodeIds as an object.
     * 
     * Alternative inputs are a String containing a nodeId or nothing.
     * When a String is supplied, the position of the node corresponding to the ID is returned.
     * When nothing is supplied, the positions of all nodes are returned.
     * 
     * @param {string[]} nodeIds
     * @returns {{[nodeId: string]: IPosition}}
     * 
     * @memberOf Network
     */
    getPositions(nodeIds: string[]): {[nodeId: string]: IPosition};
    getPositions(nodeId: string): IPosition;
    getPositions(): {[nodeId: string]: IPosition};

    /**
     * 	When using the vis.DataSet to load your nodes into the network,
     * this method will put the X and Y positions of all nodes into that dataset.
     * If you're loading your nodes from a database and have this dynamically coupled with the DataSet,
     * you can use this to stablize your network once, then save the positions in that database
     * through the DataSet so the next time you load the nodes, stabilization will be near instantaneous. 
     * 
     * If the nodes are still moving and you're using dynamic smooth edges (which is on by default),
     * you can use the option stabilization.onlyDynamicEdges in the physics module to improve initialization time. 
     * 
     * This method does not support clustering.
     * At the moment it is not possible to cache positions when using clusters since
     * they cannot be correctly initialized from just the positions.
     * 
     * @memberOf Network
     */
    storePositions(): void;

    /**
     * You can use this to programatically move a node.
     * The supplied x and y positions have to be in canvas space!
     * 
     * @param {string} nodeId the node that will be moved
     * @param {number} x new canvas space x position
     * @param {number} y new canvas space y position
     * 
     * @memberOf Network
     */
    moveNode(nodeId: string, x: number, y: number): void;

    /**
     * Returns a bounding box for the node including label.
     * 
     * @param {string} nodeId
     * @returns {IBoundingBox}
     * 
     * @memberOf Network
     */
    getBoundingBox(nodeId: string): IBoundingBox;

    /**
     * Returns an array of nodeIds of the all the nodes that are directly connected to this node.
     * If you supply an edgeId, vis will first match the id to nodes.
     * If no match is found, it will search in the edgelist and return an array: [fromId, toId].
     * 
     * @param {string} nodeOrEdgeId a node or edge id
     * @returns {(string[] | {fromId: string, toId: string}[])}
     * 
     * @memberOf Network
     */
    getConnectedNodes(nodeOrEdgeId: string): string[] | {fromId: string, toId: string}[];

    /**
     * Returns an array of edgeIds of the edges connected to this node.
     * 
     * @param {string} nodeId the node id
     * @returns {string[]}
     * 
     * @memberOf Network
     */
    getConnectedEdges(nodeId: string): string[];

    /**
     * Start the physics simulation.
     * This is normally done whenever needed and is only really useful
     * if you stop the simulation yourself and wish to continue it afterwards.
     * 
     * @memberOf Network
     */
    startSimulation(): void;

    /**
     * This stops the physics simulation and triggers a stabilized event.
     * Tt can be restarted by dragging a node,
     * altering the dataset or calling startSimulation().
     * 
     * @memberOf Network
     */
    stopSimulation(): void;

    /**
     * You can manually call stabilize at any time.
     * All the stabilization options above are used.
     * You can optionally supply the number of iterations it should do.
     * 
     * @param {number} [iterations] the number of iterations it should do
     * 
     * @memberOf Network
     */
    stabilize(iterations?: number): void;

    /**
     * Returns an object with selected nodes and edges ids.
     * 
     * @returns {{ nodes: string[], edges: string[] }}
     * 
     * @memberOf Network
     */
    getSelection(): { nodes: string[], edges: string[] };

    /**
     * Returns an array of selected node ids like so:
     * [nodeId1, nodeId2, ..].
     * 
     * @returns {string[]}
     * 
     * @memberOf Network
     */
    getSelectedNodes(): string[];

    /**
     * Returns an array of selected edge ids like so:
     * [edgeId1, edgeId2, ..].
     * 
     * @returns {string[]}
     * 
     * @memberOf Network
     */
    getSelectedEdges(): string[];

    /**
     * Returns a nodeId or undefined.
     * The DOM positions are expected to be in pixels from the top left corner of the canvas.
     * 
     * @param {IPosition} position
     * @returns {string}
     * 
     * @memberOf Network
     */
    getNodeAt(position: IPosition): string;

    /**
     * Returns a edgeId or undefined.
     * The DOM positions are expected to be in pixels from the top left corner of the canvas.
     * 
     * @param {IPosition} position
     * @returns {string}
     * 
     * @memberOf Network
     */
    getEdgeAt(position: IPosition): string;

    /**
     * Selects the nodes corresponding to the id's in the input array.
     * If highlightEdges is true or undefined, the neighbouring edges will also be selected.
     * This method unselects all other objects before selecting its own objects. Does not fire events.
     * 
     * @param {string[]} nodeIds
     * @param {boolean} [highlightEdges]
     * 
     * @memberOf Network
     */
    selectNodes(nodeIds: string[], highlightEdges?: boolean): void;

    /**
     * Selects the edges corresponding to the id's in the input array.
     * This method unselects all other objects before selecting its own objects.
     * Does not fire events.
     * 
     * @param {string[]} edgeIds
     * 
     * @memberOf Network
     */
    selectEdges(edgeIds: string[]): void;

    /**
     * Sets the selection.
     * You can also pass only nodes or edges in selection object.
     * 
     * @param {{ nodes: string[], edges: string[] }} selection
     * @param {ISelectionOptions} [options]
     * 
     * @memberOf Network
     */
    setSelection(selection: { nodes: string[], edges: string[] }, options?: ISelectionOptions): void;

    /**
     * Unselect all objects.
     * Does not fire events.
     * 
     * @memberOf Network
     */
    unselectAll(): void;

    /**
     * Returns the current scale of the network.
     * 1.0 is comparible to 100%, 0 is zoomed out infinitely.
     * 
     * @returns {number} the current scale of the network
     * 
     * @memberOf Network
     */
    getScale(): number;

    /**
     * Returns the current central focus point of the view in the form: { x: {Number}, y: {Number} }
     * 
     * @returns {IPosition} the view position;
     * 
     * @memberOf Network
     */
    getViewPosition(): IPosition;

    /**
     * Zooms out so all nodes fit on the canvas. 
     * 
     * @param {IFitOptions} [options] All options are optional for the fit method
     * 
     * @memberOf Network
     */
    fit(options?: IFitOptions): void;

    /**
     * You can focus on a node with this function.
     * What that means is the view will lock onto that node, if it is moving, the view will also move accordingly.
     * If the view is dragged by the user, the focus is broken. You can supply options to customize the effect.
     * 
     * @param {string} nodeId
     * @param {IFocusOptions} [options] 
     * 
     * @memberOf Network
     */
    focus(nodeId: string, options?: IFocusOptions): void;

    /**
     * You can animate or move the camera using the moveTo method.
     * 
     * @param {IMoveToOptions} options
     * 
     * @memberOf Network
     */
    moveTo(options: IMoveToOptions): void;

    /**
     * Programatically release the focussed node.
     * 
     * @memberOf Network
     */
    releaseNode(): void;

    /**
     * If you use the configurator, you can call this method to get an options object that contains
     * all differences from the default options caused by users interacting with the configurator.
     * 
     * @returns {*}
     * 
     * @memberOf Network
     */
    getOptionsFromConfigurator(): any;
  }

  /**
   * Options interface for focus function.
   * 
   * @export
   * @interface IFocusOptions
   * @extends {IViewPortOptions}
   */
  export interface IFocusOptions extends IViewPortOptions {
    /**
     * Locked denotes whether or not the view remains locked to
     * the node once the zoom-in animation is finished.
     * Default value is true. 
     * 
     * @type {boolean}
     * @memberOf IFocusOptions
     */
    locked?: boolean;
  }

  /**
   * Base options interface for some viewport functions.
   * 
   * @export
   * @interface IViewPortOptions
   */
  export interface IViewPortOptions {
    /**
     * The scale is the target zoomlevel.
     * Default value is 1.0.
     * 
     * @type {number} the scale.
     * @memberOf IFocusOptions
     */
    scale?: number;

    /**
     * The offset (in DOM units) is how many pixels from the center the view is focussed.
     * Default value is {x:0,y:0}
     * 
     * @type {IPosition}
     * @memberOf IFocusOptions
     */
    offset?: IPosition;

    /**
    * For animation you can either use a Boolean to use it with the default options or
    * disable it or you can define the duration (in milliseconds) and easing function manually.
    * 
    * @type {(IAnimationOptions | boolean)}
    * @memberOf IFitOptions
    */
    animation?: IAnimationOptions | boolean;
  }

  /**
   * You will have to define at least a scale, position or offset.
   * Otherwise, there is nothing to move to.
   * 
   * @export
   * @interface IMoveToOptions
   * @extends {IViewPortOptions}
   */
  export interface IMoveToOptions extends IViewPortOptions {
      /**
       * The position (in canvas units!) is the position of the central focus point of the camera.
       * 
       * @type {IPosition}
       * @memberOf IMoveToOptions
       */
      position?: IPosition;
  }

  /**
   * Animation options interface.
   * 
   * @export
   * @interface IAnimationOptions
   */
  export interface IAnimationOptions {

    /**
     * The duration (in milliseconds).
     * 
     * @type {number}
     * @memberOf IAnimationOptions
     */
    duration: number;
    /**
     * The easing function.
     * 
     * Available are:
     * linear, easeInQuad, easeOutQuad, easeInOutQuad, easeInCubic,
     * easeOutCubic, easeInOutCubic, easeInQuart, easeOutQuart, easeInOutQuart,
     * easeInQuint, easeOutQuint, easeInOutQuint.
     * 
     * @type {string}
     * @memberOf IAnimationOptions
     */
    easingFunction: string;
  }

  /**
   * Optional options for the fit method.
   * 
   * @export
   * @interface IFitOptions
   */
  export interface IFitOptions {

    /**
     * The nodes can be used to zoom to fit only specific nodes in the view. 
     * 
     * @type {string[]}
     * @memberOf IFitOptions
     */
    nodes?: string[];

    /**
     * For animation you can either use a Boolean to use it with the default options or
     * disable it or you can define the duration (in milliseconds) and easing function manually.
     * 
     * @type {(IAnimationOptions | boolean)}
     * @memberOf IFitOptions
     */
    animation: IAnimationOptions | boolean;
  }

  export interface ISelectionOptions {
    unselectAll?: boolean;
    highlightEdges?: boolean;
  }

  /**
   * These values are in canvas space.
   * 
   * @export
   * @interface IBoundingBox
   */
  export interface IBoundingBox {
      top: number;
      left: number;
      right: number;
      bottom: number;
  }

  /**
   * Cluster methods options interface.
   * 
   * @export
   * @interface IClusterOptions
   */
  export interface IClusterOptions {

      /**
       * Optional for all but the cluster method.
       * The cluster module loops over all nodes that are selected to be in the cluster
       * and calls this function with their data as argument. If this function returns true,
       * this node will be added to the cluster. You have access to all options (including the default)
       * as well as any custom fields you may have added to the node to determine whether or not to include it in the cluster.
       * 
       * @memberOf IClusterOptions
       */
      joinCondition?: (nodeOptions: any) => boolean;

      /**
       * Optional.
       * Before creating the new cluster node, this (optional) function will be called with the properties
       * supplied by you (clusterNodeProperties), all contained nodes and all contained edges.
       * You can use this to update the properties of the cluster based on which items it contains.
       * The function should return the properties to create the cluster node.
       * 
       * @type {(clusterOptions: any, childNodesOptions: any[], childEdgesOptions: any[])}
       * @memberOf IClusterOptions
       */
      processProperties?: (clusterOptions: any, childNodesOptions: any[], childEdgesOptions: any[]) => any;

      /**
       * Optional.
       * This is an object containing the options for the cluster node.
       * All options described in the nodes module are allowed.
       * This allows you to style your cluster node any way you want.
       * This is also the style object that is provided in the processProperties function for fine tuning.
       * If undefined, default node options will be used.
       * 
       * @type {INodeOptions}
       * @memberOf IClusterOptions
       */
      clusterNodeProperties?: INodeOptions;

      /**
       * Optional.
       * This is an object containing the options for the edges connected to the cluster.
       * All options described in the edges module are allowed.
       * Using this, you can style the edges connecting to the cluster any way you want.
       * If none are provided, the options from the edges that are replaced are used.
       * If undefined, default edge options will be used.
       * 
       * @type {IEdgeOptions}
       * @memberOf IClusterOptions
       */
      clusterEdgeProperties?: IEdgeOptions;
  }

  /**
   * Options for the openCluster function of Network.
   * 
   * @export
   * @interface IOpenClusterOptions
   */
  export interface IOpenClusterOptions {

      /**
       * A function that can be used to manually position the nodes after the cluster is opened.
       * The containedNodesPositions contain the positions of the nodes in the cluster at the
       * moment they were clustered. This function is expected to return the newPositions,
       * which can be the containedNodesPositions (altered) or a new object.
       * This has to be an object with keys equal to the nodeIds that exist in the
       * containedNodesPositions and an {x:x,y:y} position object. 
       * 
       * For all nodeIds not listed in this returned object,
       * we will position them at the location of the cluster.
       * This is also the default behaviour when no releaseFunction is defined.
       * 
       * @memberOf IOpenClusterOptions
       */
      releaseFunction: (clusterPosition: IPosition, containedNodesPositions: {[nodeId: string]: IPosition}) => {[nodeId: string]: IPosition};
  }

  export interface IPosition {
      x: number;
      y: number;
  }

  export interface IProperties {

    nodes: string[];

    edges: string[];

    event: string[];

    pointer: {
        DOM: IPosition;
        canvas: IPosition;
    };

    previousSelection?: {
        nodes: string[];
        edges: string[];
    };
  }

  export interface Callback {
      callback?: (params?: any) => void;
  }

  export interface Dataset {

  }

  export interface IData {
      nodes?: INode[];
      edges?: IEdge[];
  }

  export interface INode extends INodeOptions {
      id: string;
  }

  export interface IEdge extends IEdgeOptions {
      id: string;
  }

  export interface IOptions {
      autoResize?: boolean;

      width?: string;

      height?: string;

      locale?: string;

      locales?: string[];

      clickToUse?: boolean;

      configure?: any; // http://visjs.org/docs/network/configure.html#

      edges?: IEdgeOptions;

      nodes?: INodeOptions;

      groups?: any;

      layout?: any; // http://visjs.org/docs/network/layout.html

      interaction?: any; // visjs.org/docs/network/interaction.html?keywords=edges

      manipulation?: any; // http://visjs.org/docs/network/manipulation.html#

      physics?: any; // http://visjs.org/docs/network/physics.html#
  }

  export interface INodeOptions {
    borderWidth?: number;

    borderWidthSelected?: number;

    brokenImage?: string;

    color?: {
        border?: string,
        background?: string,
        highlight?: string | {
            border?: string,
            background?: string,
        },
        hover?: string | {
            border?: string,
            background?: string,
        }
    };

    fixed?: boolean | {
        x?: boolean,
        y?: boolean,
    };

    font?: string | {
        color?: string,
        size?: number, // px
        face?: string,
        background?: string,
        strokeWidth?: number, // px
        strokeColor?: string,
        align?: string,
    };

    group?: string;

    hidden?: boolean;

    icon?: {
        face?: string,
        code?: string,
        size?: number,  // 50,
        color?: string,
    };

    image?: string;

    label?: string;

    labelHighlightBold?: boolean;

    level?: number;

    mass?: number;

    physics?: boolean;

    scaling?: IOptionsScaling;

    shadow?: boolean | IOptionsShadow;

    shape?: string;

    shapeProperties?: {
        borderDashes: boolean | number[], // only for borders
        borderRadius: number,     // only for box shape
        interpolation: boolean,  // only for image and circularImage shapes
        useImageSize: boolean,  // only for image and circularImage shapes
        useBorderWithImage: boolean  // only for image shape
    };

    size?: number;

    title?: string;

    value?: number;

    x?: number;

    y?: number;
  }

  export interface IEdgeOptions {
    arrows?: string | {
        to?: boolean | {
            enabled?: boolean,
            scaleFactor?: number,
        },
        middle?: boolean | {
            enabled?: boolean,
            scaleFactor?: number,
        },
        from: boolean | {
            enabled?: boolean,
            scaleFactor?: number,
        }
    };

    arrowStrikethrough?: boolean;

    color?: string | {
        color?: string,
        highlight?: string,
        hover?: string,
        inherit?: boolean | string,
        opacity?: number,
    };

    dashes?: boolean | number[];

    font?: string | {
        color?: string,
        size?: number, // px
        face?: string,
        background?: string,
        strokeWidth?: number, // px
        strokeColor?: string,
        align?: string,
    };

    from?: number | string;

    hidden?: boolean;

    hoverWidth?: number; // please note, hoverWidth could be also a function. This case is not represented here

    label?: string;

    labelHighlightBold?: boolean;

    length?: number;

    physics?: boolean;

    scaling?: IOptionsScaling;

    selectionWidth?: number; // please note, selectionWidth could be also a function. This case is not represented here

    selfReferenceSize?: number;

    shadow?: boolean | IOptionsShadow;

    smooth?: boolean | {
        enabled: boolean,
        type: string,
        forceDirection?: string | boolean,
        roundness: number,
    };

    title?: string;

    to?: number | string;

    value?: number;

    width?: number;
  }

  export interface IOptionsScaling {
    min?: number;
    max?: number;
    label?: boolean | {
        enabled?: boolean,
        min?: number,
        max?: number,
        maxVisible?: number,
        drawThreshold?: number
    };
    customScalingFunction?(min?: number, max?: number, total?: number, value?: number): number;
  }

  export interface IOptionsShadow {
    enabled: boolean;
    color: string;
    size: number;
    x: number;
    y: number;
  }

  export interface IEvents {
    click?(properties?: IProperties): void;

    doubleClick?(properties?: IProperties): void;

    oncontext?(properties?: IProperties): void;

    hold?(properties?: IProperties): void;

    release?(properties?: IProperties): void;

    select?(properties?: IProperties): void;

    selectNode?(properties?: IProperties): void;

    selectEdge?(properties?: IProperties): void;

    deselectNode?(properties?: IProperties): void;

    deselectEdge?(properties?: IProperties): void;

    dragStart?(properties?: IProperties): void;

    dragging?(properties?: IProperties): void;

    dragEnd?(properties?: IProperties): void;

    hoverNode?(node?: string): void;

    blurNode?(node?: string): void;

    hoverEdge?(node?: string): void;

    blurEdge?(node?: string): void;

    zoom?(node?: string): void;

    showPopup?(node?: string): void;

    hidePopup?(node?: string): void;

    startStabilizing?(): void;

    stabilizationProgress?(properties?: {
        iterations?: number,
        total?: number,
    }): void;

    stabilizationIterationsDone?(): void;

    stabilized?(properties?: {
        iterations?: number,
    }): void;

    resize?(properties?: {
        width: number,
        height: number,
        oldWidth: number,
        oldHeight: number,
    }): void;

    initRedraw?(): void;

    beforeDrawing?(canvasContext?: any): void;

    afterDrawing?(canvasContext?: any): void;

    animationFinished?(): void;

    configChange?(properties?: any): void;
  }
}

declare module "vis" {
  export = __vis;
}

declare namespace moment {
    interface Moment {
    }
}