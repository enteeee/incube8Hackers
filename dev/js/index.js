import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";



ReactDOM.render(
    <div className="main">
        <div>
            <div className="avatar-crop-container" id="crop-avatar1">
                <div className="modal" id="avatar-modal1" aria-hidden="true" aria-labelledby="avatar-modal-label" role="dialog" data-backdrop="static" data-keyboard="false">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <form className="avatar-form" action=""  method="post">

                                <div className="modal-body">
                                    <div className="avatar-body">

                                        <div className="avatar-upload dropzone avatar-top-content">
                                            <input type="hidden" className="avatar-x" name="x" />
                                            <input type="hidden" className="avatar-y" name="y" />
                                            <input type="hidden" className="avatar-w" name="width" />
                                            <input type="hidden" className="avatar-h" name="height" />
                                            <input type="hidden" className="avatar-r" name="rotate" />
                                            <input type="hidden" className="avatar-public" name="is_private" value="0"/>
                                            <input type="hidden" className="avatar-src" name="avatar-src"/>
                                            <input type="hidden" className="avatar-data" name="avatar_data"/>
                                            <input type="file" className="avatar-input avatar-input-top" id="avatarInput1" name="file" accept="image/*"/>

                                            
                                        </div>

                                        <div className="dropzone avatar-bottom-content">
                                            <div className="row">
                                                <div className="col-md-12 avatar-thumb">
                                                    <div className="avatar-preview preview-lg"></div>
                                                </div>
                                                <div className="col-md-12 avatar-main">
                                                    <div className="avatar-wrapper"><img src=""/></div>
                                                </div>
                                            </div>

                                            <div className="row avatar-btns">
                                                <div className="col-md-9 avatar-left">
                                                    <div className="btn-group">
                                                        <div className="rotate-photo">
                                                            <span>Rotate photo</span>
                                                        </div>
                                                        <button type="button" className="photo-btn btn btn-primary" data-method="rotate" data-option="-90" title="Rotate -90 degrees">&#8634;</button>
                                                        <button type="button" className="photo-btn btn btn-primary" data-method="rotate" data-option="90" title="Rotate 90 degrees">&#8635;</button>
                                                    </div>
                                                </div>
                                                <div className="col-md-3 avatar-right">
                                                    <button type="submit" className="btn btn-primary btn-block avatar-save btn--action">Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="Image--gallery">

        </div>
    </div>
    ,document.getElementById('root'));
