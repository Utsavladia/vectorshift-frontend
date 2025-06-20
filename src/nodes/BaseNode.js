// BaseNode.js
import { useState } from 'react';
import { Handle, Position } from 'reactflow';

/**
 * fields: [
 *   { key, label, type, value, onChange, options (for select), ... }
 * ]
 * handles: [
 *   { type, position, id, style }
 * ]
 */
export const BaseNode = ({
    title = '',
    fields = [],
    handles = [],
    customContent = null,
    style = {},
}) => {
    return (
        <div style={{ width: 200, height: 80, border: '1px solid black', ...style }}>
            {/* Handles (top) */}
            {handles.filter(h => h.position === Position.Top).map((h, i) => (
                <Handle key={i} {...h} />
            ))}
            <div>
                <span>{title}</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {fields.map((field, i) => {
                    if (field.type === 'select') {
                        return (
                            <label key={i}>
                                {field.label}
                                <select value={field.value} onChange={field.onChange}>
                                    {field.options.map(opt => (
                                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                                    ))}
                                </select>
                            </label>
                        );
                    } else if (field.type === 'checkbox') {
                        return (
                            <label key={i}>
                                {field.label}
                                <input type="checkbox" checked={field.value} onChange={field.onChange} />
                            </label>
                        );
                    } else {
                        // text, number, etc.
                        return (
                            <label key={i}>
                                {field.label}
                                <input type={field.type} value={field.value} onChange={field.onChange} />
                            </label>
                        );
                    }
                })}
                {customContent}
            </div>
            {/* Handles (left, right, bottom) */}
            {handles.filter(h => h.position !== Position.Top).map((h, i) => (
                <Handle key={i} {...h} />
            ))}
        </div>
    );
};
